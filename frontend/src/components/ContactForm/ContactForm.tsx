import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StackScreenProps} from '@react-navigation/stack';
import {TextInput, StyleSheet, View, Text, TouchableHighlight, SafeAreaView, Alert, ScrollView, ImageBackground} from 'react-native';
import {hasPersonalError} from '../../utils/validation';
import {RootState} from '../../redux/store/index'
import {reloadCart, saveOrder} from '../../redux/actions/actionCreators';

interface Props extends StackScreenProps<any, any> {}

export const ContactForm = ({navigation}: Props) => {
    const cart = useSelector((store:RootState) => store.cart);
    const user = useSelector((store:RootState) => store.user);
    const dispatch = useDispatch();
    let [personalName, setPersonalName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [postalCode, setPostalCode] = useState('');
    let [titular, setTitular] = useState('');
    let [numberTarget, setNumberTarget] = useState('');
    let [data, setData] = useState('');
    let [secretNumber, setSecretNumber] = useState('');
    const [error, setError] = useState(false);
    let orderUser = {
        personalName,
        address,
        city,
        postalCode,
        titular,
        numberTarget,
        data,
        secretNumber
    }
    return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.personalData}>
            <Text style={styles.title}>Datos personales</Text>
            <TextInput
                    style={styles.input}
                    placeholder="Nombre y Apellidos"
                    autoCapitalize="none"
                    onChangeText={nameInput => setPersonalName(nameInput)}
                    onEndEditing={() => setError(() => hasPersonalError(personalName))}
                    defaultValue={personalName}
            />
            <TextInput
                    style={styles.input}
                    placeholder="Dirección envío (Calle, número, puerta)"
                    autoCapitalize="none"
                    onChangeText={addressInput => setAddress(addressInput)}
                    onEndEditing={() => setError(() => hasPersonalError(address))}
                    defaultValue={address}
            />
            <TextInput
                    style={styles.input}
                    placeholder="Ciudad"
                    autoCapitalize="none"
                    onChangeText={cityInput => setCity(cityInput)}
                    onEndEditing={() => setError(() => hasPersonalError(city))}
                    defaultValue={city}
            />
            <TextInput
                    style={styles.input}
                    placeholder="Código postal"
                    autoCapitalize="none"
                    onChangeText={codeInput => setPostalCode(codeInput)}
                    onEndEditing={() => setError(() => hasPersonalError(postalCode))}
                    defaultValue={postalCode}
            />
            {
                error ? ( 
                    <Text style={styles.messageError}>Rellena los campos correctamente!</Text>
                ):(
                    <Text></Text>
                )
            }
      </View>
        <Text style={styles.title}>Datos Bancarios</Text>
        <ImageBackground
            style={styles.card}
            source={{
            uri: 'https://www.bbva.es/content/dam/public-web/bbvaes/images/personas/productos/02_tarjetas/productos/credito/tarjeta-visa-platinum/2400x1600_Tarjeta_platinum.png.img.2400.1585137059026.png',
          }}
        >
            <Text style={styles.titular}>{titular.toUpperCase()}</Text>
            <Text style={styles.cardNumber}>{numberTarget}</Text>
            <Text style={styles.data}>{data}</Text>
            <Text style={styles.cvv}>CVV {secretNumber}</Text>
        </ImageBackground>  
        <View style={styles.cardData}>
        <TextInput
                style={styles.input}
                placeholder="Nombre y Apellidos del titular"
                autoCapitalize="none"
                onChangeText={name => setTitular(name)}
                onEndEditing={() => setError(() => hasPersonalError(titular))}
                defaultValue={titular}
        />
        <TextInput
                style={styles.input}
                placeholder="Número de targeta"
                autoCapitalize="none"
                onChangeText={target => setNumberTarget(target)}
                onEndEditing={() => setError(() => hasPersonalError(numberTarget))}
                defaultValue={numberTarget}
        />
        <TextInput
                style={styles.input}
                placeholder="Fecha de caducidad"
                autoCapitalize="none"
                onChangeText={date => setData(date)}
                onEndEditing={() => setError(() => hasPersonalError(data))}
                defaultValue={data}
        />
        <TextInput
                style={styles.input}
                placeholder="CVV"
                autoCapitalize="none"
                onChangeText={num => setSecretNumber(num)}
                onEndEditing={() => setError(() => hasPersonalError(secretNumber))}
                defaultValue={secretNumber}
        />
         {
                error ? ( 
                    <Text style={styles.messageError}>Rellena los campos correctamente!</Text>
                ):(
            <TouchableHighlight style={styles.buttonAccept}
                onPress={()=>{ 
                    for(let i= 0; i<cart.length; i++){
                        cart[i].stock = cart[i]?.stock - cart[i]?.quantity;
                        dispatch(reloadCart(cart));
                        Alert.alert(
                            "Pedido completado!",
                            `Enhorabuena ${personalName}, tu pedido se ha realizado con exito`,
                            [
                              { text: "OK", onPress: () => (
                                user.user.cart.push(cart),
                                dispatch(saveOrder(user.user, orderUser, user.token)),
                                navigation.navigate('Lobby')
                                )}
                            ]
                          );
                }}
            }
            >
                <Text>COMPRAR</Text>
            </TouchableHighlight>
                )
            }
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    input: {
      backgroundColor: 'white',
      width: 300,
      height: 37,
      marginTop: 10,
      marginLeft: 60,
      borderRadius: 25,
      padding: 8
    },
    title: {
        alignSelf: 'center',
        fontSize: 20
    },
    messageError: {
        marginTop: 10
    },
    buttonAccept: {
        marginLeft: 300,
        marginTop: 20,
        backgroundColor: '#FFB800',
        width: 90,
        height: 27,
        padding: 4,
        borderRadius: 15,
        alignItems: 'center'
    },
    titular: {
        color: 'white',
        position: 'absolute',
        marginTop: 50,
        marginLeft: 70
    },
    cardNumber: {
        color: 'white',
        position: 'absolute',
        marginTop: 120,
        marginLeft: 20
    },
    data: {
        color: 'white',
        position: 'absolute',
        marginTop: 165,
        marginLeft: 10
    },
    cvv: {
        color: 'white',
        position: 'absolute',
        marginTop: 165,
        marginLeft: 120
    },
    personalData: {
        marginTop: 10,
        height: 240
    },
    cardData: {
        height: 330,
    },
    card: {
        width: 300,
        height: 200,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 65
    },
});
  