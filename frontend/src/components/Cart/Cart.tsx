import React from 'react';
import {Moto} from '../../models/moto';
import {RootState} from '../../redux/store/index'
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {Text, SafeAreaView, View, ScrollView, Image, ImageBackground, TouchableHighlight, StyleSheet} from 'react-native';
import { deleteFromCart } from '../../redux/actions/actionCreators';

interface Props extends StackScreenProps<any, any> {}

const Cart = ({navigation}: Props) => {
  const cart = useSelector((store:RootState) => store.cart)
  const user = useSelector((store:RootState) => store.user);
  const dispatch = useDispatch();
  let precioTotal = 0;
  return (
    <ImageBackground
    style={styles.background}
    source={{
      uri: 'https://www.motoblouz.com/enjoytheride/wp-content/uploads/2018/10/cosmo_connected_nuit.jpg'
    }}>
       <SafeAreaView>
         <ScrollView>
     <Image
        style={styles.logo}
        source={{
          uri: 'https://i.postimg.cc/FF2Y5GJd/logo-small.png',
        }}
      />
    { cart.map((moto: Moto) =>(
      <View style={styles.componentMoto} key={moto._id}>
          <View style={styles.photoContainer}>
          <Image
                        style={styles.photo}
                        source={{
                          uri: `${moto.picture}`,
                        }}
                        />
          </View>
                        <View style={styles.dataContainer}>
                        <Text style={styles.cartInfo}> {moto?.marca} {moto?.modelo}</Text>
                              <Text style={styles.cartInfo}>Cantidad: {moto?.quantity} </Text>
                              <Text style={styles.precioMoto}>{moto.quantity * moto?.precio}€</Text>
                              <Text style={styles.increment}>{precioTotal += moto.quantity * moto?.precio}€</Text>
                        </View>
          <View style={styles.deleteContainer}>
          <TouchableHighlight
            onPress= {()=> {           
              dispatch(deleteFromCart(moto))
            }}
            >
            <Image
        testID= 'buttonDelete'
        style={styles.delete}
        source={{
          uri: 'https://i.postimg.cc/nhvmXCj2/icons8-xbox-x-50.png',
        }}
      />
      </TouchableHighlight>
      </View>
                <Text style={styles.price}>{precioTotal}</Text>
      </View>
    ))}
    </ScrollView>
    </SafeAreaView>
    <View style={styles.containerTotalPrice}>
      <Text style={styles.totalPrice}>TOTAL: {precioTotal} €</Text>
      { user.user !== undefined ? (
                <TouchableHighlight
                  onPress={()=> {
                    navigation.navigate('ContactForm')
                  }}
                >
                <Image
                        testID = 'buyButton'
                        style={styles.buy}
                        source={{
                          uri: 'https://i.postimg.cc/xCtp4npb/icons8-us-dollar-50.png',
                        }}
                      />  
                </TouchableHighlight>
      ): (
        <Text style={styles.login}>Inicia sesión para comprar</Text>
      )
}         
    </View>
    </ImageBackground>
  )
};
const styles = StyleSheet.create({
  deleteContainer: {
    marginRight: 10
  },
  precioMoto: {
    color: '#FFB800',
    fontSize: 24,
    marginTop: 10,
    marginLeft: 20
  },
  cartInfo: {
    fontSize: 18,
    color: 'black'
  },
  increment: {
    opacity: 0
  },
  photo: {
    width: 180,
    marginLeft: 15,
    height: 130,
    borderRadius: 25
  },
  photoContainer: {
    height: 150,
    width: 200,
    marginLeft: 23,
    marginTop: 10
  },
  dataContainer: {
    width: 150,
    height: 130,
    borderRadius: 15,
    backgroundColor: 'white',
    marginLeft: 20,
    padding: 20,
    marginTop: 10
  },
  componentMoto: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    width: 390,
    marginLeft: 15,
    borderTopColor: '#FFB800',
    borderTopWidth: 2,
  },
  background: {
    width: 600,
    height: 700
  },
  buy: {
    width: 30,
    height: 30
  },
  description: {
    display: 'flex',
    flexDirection: 'row'
  },
  login: {
    color: '#FFB800'
  },
  delete: {
    width: 30,
    height: 30,
    marginTop: 10
  },
  containerTotalPrice: {
    backgroundColor: '#464646',
    width: 415,
    height: 50,
    marginTop: 552,
    position: 'absolute',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalPrice: {
    color: '#FFB800',
    fontSize: 20,
    alignSelf: 'center'
  },
  price:{
    opacity: 0
  },
  logo: {
    width: 300,
    height: 42,
    marginTop: 15,
    marginLeft: 10
  },
  scrollCart: {
    backgroundColor: 'white',
    width: 200,
    height: 170,
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 15
  }
});

export default (Cart);