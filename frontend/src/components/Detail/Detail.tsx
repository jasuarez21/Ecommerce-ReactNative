import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store/index'
import {Moto} from '../../models/moto';
import {
  Text,
  Image,
  TouchableHighlight,
  ImageBackground,
  View,
  StyleSheet,
} from 'react-native';
import { addToCart } from '../../redux/actions/actionCreators';

const Detail = ({route}: RootState) => {
  const motos = useSelector((store:any) => store.motos);
  const dispatch = useDispatch();
  const {motoSelected} = route.params;
  const motoDetail = motos.filter((moto: Moto) => motoSelected === moto._id);
  return (
    <>
    <ImageBackground
      source={{uri: motoDetail[0].picture}}
      style={styles.background}>
        <View style={styles.containerLogo}>
           <Text style={styles.detailMoto}>{motoDetail[0].marca} {motoDetail[0].modelo}</Text>
        </View>
        <Text style={styles.price}>{motoDetail[0].precio}€</Text>
      <View style={styles.information}>
        <Text style={styles.textinfo}>
            {motoDetail[0].descripcion}
        </Text>
        <Text style={styles.textinfo}>Marca: {motoDetail[0].marca}</Text>
        <Text style={styles.textinfo}>Modelo: {motoDetail[0].modelo}</Text>
        <Text style={styles.textinfo}>CC: {motoDetail[0].cc}</Text>
        <Text style={styles.textinfo}>Stock: {
        motoDetail[0].stock >= 1 ? (
            motoDetail[0].stock
        ): (
            <Text>No hay stock</Text>
        )
        }</Text>
      </View>
      { motoDetail[0].stock !== 0 ? (
        <TouchableHighlight
          style={styles.buttonCart}
          onPress={() => (
            motoDetail[0].stock -1,
            dispatch(addToCart(motoDetail[0])))}>
           <Image
                testID= 'addButton'
                style={styles.cart}
                source={{
                  uri: 'https://i.postimg.cc/GpkSCktY/icons8-buy-52.png',
                }}
              />
        </TouchableHighlight>
      ) : (
        <View style={styles.buttonCartDisabled}>
            <Image
                style={styles.cart}
                source={{
                  uri: 'https://i.postimg.cc/jq7ZrsJr/icons8-out-of-stock-30.png',
                }}
              />
        </View>
      )
      
      }
    </ImageBackground>
        </>
  );
};
const styles = StyleSheet.create({
  background: {
    width: 450,
    height: 500,
  },
  noStock: {
    color: 'white'
  },
  buttonCart: {
    width: 110,
    height: 30,
    position: 'absolute',
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 150
  },
  buttonCartDisabled: {
    width: 110,
    height: 30,
    position: 'absolute',
    borderRadius: 10,
    textAlign: 'center',
    marginLeft: 150
  },
  containerLogo: { 
    backgroundColor: 'black',
    height: 65,
  },
  cart: {
    width: 35,
    height: 35,
    marginTop: 15,
    marginLeft: 50
  },
  information: {
    backgroundColor: 'black',
    opacity: 0.8,
    padding: 10,
    marginTop: 280,
    height: 500,
    width: 405,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  detailMoto: {
    fontSize: 24,
    color: '#FFB800',
    marginTop: 20,
    marginLeft: 20,
  },
  price:{
    fontSize: 24,
    color: '#FFB800',
    marginTop: 20,
    marginLeft: 330,
    position: 'absolute'
  },
  textinfo: {
    margin: 10,
    fontSize: 18,
    color: 'white',
  },
  logo: {
    width: 300,
    height: 42,
    marginTop: 15,
    marginBottom: 50
  }
});

export default (Detail);