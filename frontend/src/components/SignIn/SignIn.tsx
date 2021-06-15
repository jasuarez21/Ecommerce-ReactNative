import React, {useState} from 'react'
import {Text, TextInput, TouchableHighlight, ImageBackground, View, StyleSheet, Image} from 'react-native';
import {RootState} from '../../redux/store/index'
import { Avatar } from 'react-native-elements';
import {
  hasNameError,
  hasEmailError,
  hasPasswordError,
} from '../../utils/validation';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {signUp} from '../../redux/actions/actionCreators';
import {User} from '../../models/user'


interface Props extends StackScreenProps<any, any> {
  user: User
}

const SignIn = ({navigation}: Props) => {
    const user = useSelector((store:RootState) => store.user);
    const dispatch = useDispatch();
    let [avatar, setAvatar] = useState('')
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [alias, setAlias] = useState('');
    const [nameError, setError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [pdwError, setPdwError] = useState(false);
    function signUpClick() {
      dispatch(signUp(email, password, alias, avatar));
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
      <View style={styles.containerInput}>
          <Text style={styles.avatarText}>Selecciona tu avatar</Text>
          <View style={styles.avatarContainer}>
          <Avatar
            title='avatar'
            size="large"
            containerStyle={{ marginRight: 10}}
            rounded
            overlayContainerStyle={{backgroundColor: 'blue'}}
            onPress={() => setAvatar("https://image.freepik.com/vector-gratis/dar-espalda-biker-motorcycle-rider-cartoon_261104-17.jpg")}
            source={{
                uri:'https://image.freepik.com/vector-gratis/dar-espalda-biker-motorcycle-rider-cartoon_261104-17.jpg',
            }}
          />
          <Avatar
          title='avatar1'
            size="large"
            containerStyle={{ marginRight: 10}}
            rounded
            overlayContainerStyle={{backgroundColor: 'blue'}}
            onPress={() => setAvatar('https://image.freepik.com/vector-gratis/vector-dibujos-animados-wheelies-motorcycle-rider_261104-6.jpg')}
            source={{
                uri:'https://image.freepik.com/vector-gratis/vector-dibujos-animados-wheelies-motorcycle-rider_261104-6.jpg',
            }}
          />
          <Avatar
            title='avatar2'
            size="large"
            containerStyle={{ marginRight: 10}}
            rounded
            overlayContainerStyle={{backgroundColor: 'blue'}}
            onPress={() => setAvatar('https://www.nicepng.com/png/detail/365-3650531_sports-bike-02-sports-bike-03-motorcycle-cartoon.png')}
            source={{
                uri:'https://www.nicepng.com/png/detail/365-3650531_sports-bike-02-sports-bike-03-motorcycle-cartoon.png',
            }}
          />
          <Avatar
            title='avatar3'
            size="large"
            containerStyle={{ marginRight: 10}}
            rounded
            overlayContainerStyle={{backgroundColor: 'blue'}}
            onPress={() => setAvatar('https://image.shutterstock.com/image-vector/wheelies-biker-motorcycle-rider-260nw-369246080.jpg')}
            source={{
                uri:'https://image.shutterstock.com/image-vector/wheelies-biker-motorcycle-rider-260nw-369246080.jpg',
            }}
          />
      </View>
      <TextInput
       style={styles.input}
        placeholder="email"
        autoCapitalize="none"
        onEndEditing={() => setEmailError(() => hasEmailError(email))}
        onChangeText={emailInput => setEmail(emailInput)}
        defaultValue={email}
      />
        {emailError && <View>
         <Text style={styles.messageError}>Tiene que ser un e-mail</Text>
         </View> }
      <TextInput
       style={styles.input}
        placeholder="password"
        autoCapitalize="none"
        secureTextEntry={true}
        onEndEditing ={() => setPdwError(() => hasPasswordError(password))}
        onChangeText={passwordInput => setPassword(passwordInput)}
        defaultValue={password}
      />
      {pdwError && <View>
         <Text style={styles.messageError}>La password tiene que tener más de 6 letras</Text>
         </View> }
      <TextInput
       style={styles.input}
        placeholder="alias"
        autoCapitalize="none"
        onEndEditing={() => setError(() => hasNameError(alias))}
        onChangeText={aliasInput => setAlias(aliasInput)}
        defaultValue={alias}
      />
      {nameError && <View>
         <Text style={styles.messageError}>El nombre tiene que tener más de 2 cifras</Text>
         </View> }
      </View>
      
    {user.user?.alias === undefined ?
    (
      <>
      <TouchableHighlight onPress={() => signUpClick()}>
      <Image
        testID= 'signup' 
        source={{uri: "https://i.postimg.cc/6qnQSnBG/icons8-ok-26-1.png"}}
        style={styles.iconOK}
        />
      </TouchableHighlight>
      </>
    ) : (
        (nameError || emailError || pdwError) ? (
          <>
          <Text style={styles.messageError}>Algo ha ido mal!</Text>
          </>
          ):(
      <>
      <Text style={styles.textinfo}>Registrado correctamente!</Text>
      <TouchableHighlight style={styles.buttonCart} onPress={() => navigation.navigate('Login')}>
        <Image
        testID= 'buttonDefinedUser'
        style={styles.icon}
        source={{uri: 'https://i.postimg.cc/3R70g3mT/icons8-enter-48.png'}}
        />
      </TouchableHighlight>
      </>
      )
    )
    }
      </ImageBackground>
      </>
    )
}
const styles = StyleSheet.create({
  background: {
    width: 450,
    height: 800
  },
  containerInput: {
    marginTop: 50,
    marginLeft: 20
  },
  messageError: {
    color: 'white',
    marginLeft: 30
  },
  avatarText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 30,
    marginBottom: 20
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginRight: 50
  },
  iconOK:{
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: 15 ,
    marginRight: 50
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
    marginLeft: 50
  },
  input: {
    backgroundColor: 'white',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 10,
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
    color: 'white',
    alignSelf: 'center'
  },
});

export default SignIn;
