import React, {useState} from 'react';
import { Avatar } from 'react-native-elements';
import {Text, TextInput, TouchableHighlight, ImageBackground, Alert, Image, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {logout, deleteAccount, login} from '../../redux/actions/actionCreators'
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/index'

interface Props extends StackScreenProps<any, any> {}

const Login = ({navigation}: Props) => {
  const user = useSelector((store:RootState) => store.user);
  const dispatch = useDispatch();
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  function loginClick() {
    dispatch(login(email, password));
  }
  return (
    <>
  <ImageBackground
      source={{uri: 'https://i.postimg.cc/htkHJcp0/fondo-INICIAL.jpg'}}
      style={styles.background}>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://i.postimg.cc/FF2Y5GJd/logo-small.png',
        }}
      />
    {user.token === undefined ?
    (
      <>
      <Text style={styles.textinfo}>Rellena los campos para loguearte en nuestra pagina</Text>
    <>
      <TextInput
        style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        onChangeText={emailInput => setEmail(emailInput)}
        defaultValue={email}
      />
      <TextInput
       style={styles.input}
        placeholder="password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={passwordInput => setPassword(passwordInput)}
        defaultValue={password}
      />
      <TouchableHighlight onPress={() => loginClick()}>
        <Image
        testID= 'login' 
        source={{uri: "https://i.postimg.cc/6qnQSnBG/icons8-ok-26-1.png"}}
        style={styles.iconOK}
        />
      </TouchableHighlight>
      </>
    <>
      <Text style={styles.textinfo}>Todavía no estas registrado?</Text>
      <TouchableHighlight style={styles.buttonCart} onPress={() => navigation.navigate('SignIn')}>
        <Image 
        testID= 'signup'
        source= {{ uri: 'https://i.postimg.cc/0jfF6Sbg/icons8-add-user-male-64.png'}}
        style={styles.icon}
        />
      </TouchableHighlight>
      </>
    </>
    ) : (
      <>
      {navigation.navigate('Lobby')}
        <TouchableHighlight
          onPress={() => dispatch(logout())}>
          <Text style={styles.logout}
            testID = 'logoutText'
          >SALIR</Text>
        </TouchableHighlight>
        <Avatar
            size="large"
            containerStyle={{ marginLeft: 180}}
            rounded
            source={{
                uri:user?.user?.avatar,
            }}
          />
        <Text style={styles.textprofileTitle}>PERFIL</Text>
        <Text style={styles.textprofile}>Alias: {user?.user?.alias}</Text>
        <Text style={styles.textprofile}>Email: {user?.user?.email}</Text>
        <TouchableHighlight
          onPress={() => Alert.alert(
            "CUIDADO!",
            `Seguro que quieres borrar ${user.user.alias}?`,
            [
              { text: "BORRAR", onPress: () => (
                dispatch(deleteAccount(user.user, user.token)),
                navigation.navigate('Lobby')
                )}
            ]
          )}>
          <Text style={styles.deleteAccount}
            testID = 'deleteAccountButton'
          >Borrar Cuenta</Text>
        </TouchableHighlight>
      </>
    )
    }
    </ImageBackground>
</>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 500,
    height: 800
  },
  textprofile: {
    color: 'white',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 70
  },
  deleteAccount: {
    marginTop: 40,
    marginLeft: 70,
    width: 90,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#FFB800',
    borderRadius: 5
  },
  textprofileTitle: {
    color: 'white',
    fontSize: 18,
    marginTop: 30,
    marginRight: 70,
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#FFB800',
    width: 300
  },
  logout: {
    marginLeft: 340,
    marginTop: 20,
    width: 60,
    textAlign: 'center',
    color: 'black',
    backgroundColor: '#FFB800',
    borderRadius: 5
  },
  iconOK:{
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 5 ,
    marginRight: 90
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: 1 
  },
  logo: {
    width: 300,
    height: 42,
    marginTop: 80,
    marginBottom: 30,
    marginLeft: 50
  },
  input: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 10,
    marginRight: 70,
    paddingLeft: 20,
    borderRadius: 5,
    width: 300
  },
  buttonCart: {
    backgroundColor: '#FFB800',
    width: 40,
    height: 35,
    display: 'flex',
    alignContent: 'center',
    borderRadius: 5,
    marginLeft: 185,
  },
  textinfo: {
    marginTop: 50,
    marginRight: 90,
    marginBottom: 30,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
});


export default Login;
