import React, {useState} from 'react';
import {RootState} from '../../redux/store/index'
import {Sugestions} from '../Sugestions/Sugestions';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/actionCreators';
import {TouchableHighlight, View, Text, TextInput, SafeAreaView, ScrollView,  StyleSheet, Image} from 'react-native';


interface Props extends StackScreenProps<any, any> {}

const Lobby = ({navigation}: Props) => {
  const user = useSelector((store:RootState) => store.user);
  const dispatch = useDispatch();
  let [motoSearch, setMotoSearch] = useState('');
  return (
    <View style={styles.backgroundPage}>
      <SafeAreaView>
        <ScrollView>
     {user.token === undefined ?
    (
      <>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://i.postimg.cc/FF2Y5GJd/logo-small.png',
        }}
      />
      <Text style={styles.userUndefined}>Bienvenid@! Registrate, porfavor!</Text>
      <View style={styles.containerSearch}>
        <TextInput
          style={styles.input}
          testID='searchInput'
          placeholder="Que buscas?"
          autoCapitalize="none"
          onChangeText={(motoType) => {setMotoSearch(motoType)}}
          defaultValue={motoSearch}
        />
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: motoSearch})}>
          <Image
            testID='logout'
            style={styles.icon}
            source={{
              uri: 'https://i.postimg.cc/dV8GDfQL/icons8-search-50.png',
            }}
          />
          </TouchableHighlight>
      </View>
      </>
    ) : (
      <>
      <View style={styles.welcome}>
        <Image 
          style={styles.logoLogged}
          source={{
            uri: 'https://i.postimg.cc/j2236kSp/logo-small.png'
          }}
        />
        <Text style={styles.user}>Bienvenid@, {user?.user?.alias}!</Text>
      <TouchableHighlight
          onPress={() => dispatch(logout())}>
           <Image
                testID='logout2'
                style={styles.logout}
                source={{
                  uri: 'https://i.postimg.cc/ZnpJHx1s/icons8-logout-rounded-left-96.png',
                }}
              />
        </TouchableHighlight>
      </View>
      <View style={styles.containerSearch}>
        <TextInput
          testID='searchInput'
          style={styles.input}
          placeholder="Que buscas?"
          autoCapitalize="none"
          onChangeText={(motoType) => {setMotoSearch(motoType)}}
          defaultValue={motoSearch}
        />
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: motoSearch})}>
          <Image
            testID= 'navigateButton'
            style={styles.icon}
            source={{
              uri: 'https://i.postimg.cc/dV8GDfQL/icons8-search-50.png',
            }}
          />
          </TouchableHighlight>
      </View>
      <Sugestions />
      </>
    )
  }
        <Text style={styles.category}>CATEGORIAS</Text>
      <View style={styles.lobby}>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'scooter'})}>
          <Image
            testID='scooter'
            style={styles.foto}
            source={{
              uri: 'https://i.postimg.cc/HntMGvdq/pcr2.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'ofertas'})}>
          <Image
            testID='offer'
            style={styles.foto}
            source={{
              uri: 'https://www.retif.es/media/image/400x/cartel-ofertas-horizontal-86x20-cm-blanco-rojo_01.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'racing'})}>
          <Image
            testID='racing'
            style={styles.foto}
            source={{
              uri: 'https://i.postimg.cc/90c4BPZJ/cbr3.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'vespa'})}>
          <Image
            testID='vespa'
            style={styles.foto}
            source={{
              uri: 'https://i.postimg.cc/0yjw3C34/vespa4.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'custom'})}>
          <Image
            testID='custom'
            style={styles.foto}
            source={{
              uri: 'https://i.postimg.cc/6pbd5Pnw/m109R3.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigation.navigate('List', {typeMoto: 'casco'})}>
          <Image
            testID='casco'
            style={styles.foto}
            source={{
              uri: 'https://www.motocat.net/3656-thickbox/casco-integral-mt-imola-ii-solid-matt-black.jpg',
            }}
          />
        </TouchableHighlight>
      </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  foto: {
    width: 175,
    height: 110,
    borderRadius: 25,
    marginTop: 20,
  },
  logoLogged: {
    height: 70,
    width: 60,
    position: 'absolute',
    marginBottom: 50,
    marginLeft: 20,
    alignSelf: 'center'
  },
  icon: {
    height: 30,
    width: 30,
    marginTop: 15,
    marginLeft: 5
  },
  welcome: {
    backgroundColor: '#464646',
    height: 70,
    width: 450,
    textAlign: 'center',
    display: 'flex',
    padding: 10,
    flexDirection: 'row',
    marginTop: 15
  },
  category:{
    color: 'white',
    fontSize: 18,
    marginTop: 15,
    marginLeft: 20,
    borderBottomWidth: 1,
    width: 370,
    padding: 4,
    borderBottomColor: '#FFB800'
  },
  input: {
    backgroundColor: 'white',
    width: 250,
    height: 35,
    marginTop: 10,
    marginLeft: 20,
    borderRadius: 25,
  },
  containerSearch: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 15
  },
  user: {
    color: 'white',
    fontSize: 16,
    marginLeft: 200,
    alignSelf: 'center'
  },
  userUndefined: {
    color: 'white',
    marginTop: 10,
    marginLeft: 160,
    fontSize: 16
  },
  logout: {
    width: 25,
    height: 25,
    marginTop: 10,
    marginLeft: 10
  },
  logo: {
    width: 300,
    height: 42,
    marginTop: 15,
    marginLeft: 10
  },
  backgroundPage: {
    backgroundColor: 'black',
  },
  lobby: {
    backgroundColor: 'black',
    height: 600,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default Lobby;
