/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-underscore-dangle */
import React, {useEffect} from 'react';
import {RootState} from '../../redux/store/index'
import {useSelector, useDispatch} from 'react-redux';
import {GetMotos} from '../../redux/actions/actionCreators';
import {StackScreenProps} from '@react-navigation/stack';
import {Moto} from '../../models/moto'
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

interface Props extends StackScreenProps<any, any> {
  route: any
}

function MotosList({navigation, route}: Props) {
  const motos = useSelector((store:RootState) => store.motos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetMotos());
  }, []);
  const {typeMoto} = route.params;
  const filteredMotos = motos.filter((moto: Moto) => (moto.tipo.toLowerCase() === typeMoto.toLowerCase()) || (moto.marca.toLowerCase() === typeMoto.toLowerCase()) || (moto.modelo.toLowerCase() === typeMoto.toLowerCase()) || (moto.cc === `${typeMoto} cc`));
  return (
    <SafeAreaView style={styles.background}>
      <ScrollView >
    <Image
    style={styles.logo}
    source={{
      uri: 'https://i.postimg.cc/FF2Y5GJd/logo-small.png',
    }}
  />
  <Text style={styles.typeMotoSelected}>{typeMoto.toUpperCase()}</Text>
        {filteredMotos.map((moto: Moto) => (
          <View style={styles.product} key={moto._id}>
            <TouchableHighlight
              onPress={() =>
                navigation.navigate('Detail', {motoSelected: moto._id})
              }>
              <Image
                testID = 'detailMoto'
                style={styles.foto}
                source={{
                  uri: moto.picture,
                }}
              />
            </TouchableHighlight>
            <View style={styles.features}>
              <Text style={styles.text}>Marca: {moto.marca}</Text>
              <Text style={styles.text}>Modelo: {moto.modelo}</Text>
              <Text style={styles.text}>Cilindrada: {moto.cc}</Text>
              <View style={styles.containerPrice}>
              <Text style={styles.price}>{moto.precio}€</Text>
              { moto.anteriorPrecio ? (
              <Text style={styles.realPrice}>{moto?.anteriorPrecio}€</Text>
              ):
              (
                <></>
                )}
                </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  foto: {
    width: 180,
    height: 100,
    borderRadius: 25,
    marginBottom: 50,
  },
  containerPrice:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  typeMotoSelected: {
    color: 'white',
    fontSize: 18,
    marginBottom: 15,
    marginLeft: 20,
    borderBottomWidth: 1,
    width: 370,
    padding: 4,
    borderBottomColor: '#FFB800'
  },
  price: {
    fontSize: 20,
    color: '#FFB800'
  },
  realPrice: {
    color: 'red',
    fontSize: 20,
    textDecorationLine: "line-through"
  },
  logo: {
    width: 300,
    height: 42,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10
  },
  background: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  backButton: {
    textAlign: 'center',
    marginBottom: 15,
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
  },
});

export default MotosList;
