import React from 'react'
import { ScrollView, SafeAreaView,TouchableHighlight, View, Image, Text, StyleSheet} from 'react-native'

export const Sugestions = () => {
    return (
        <SafeAreaView >
           <Text style={styles.text}>RECOMENDACIONES</Text>
            <ScrollView  horizontal={true}>
                <View style={styles.scroll}>
           <TouchableHighlight>
          <Image
            style={styles.foto}
            source={{
              uri: 'https://cdn.martimotos.com/Martimotos/modules/themeconfigurator/img/5fb2194048bfb04da93ba813a31c913010c1f3b6_minibanneroutletes.jpg?scale.option=fill&w=400&h=0',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
            style={styles.foto}
            source={{
              uri: 'https://www.motovery.com/new/wp-content/uploads/2019/04/cascos-moto-scorpion-elche-alicante.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
            style={styles.foto}
            source={{
              uri: 'https://motorline.hu/modules/themeconfigurator/img/9cbb22364e86fea4e977f3de6915ec8a2c67ebba_vespa-ajandek-otletek-min.jpg',
            }}
          />
        </TouchableHighlight>
        <TouchableHighlight>
          <Image
            style={styles.foto}
            source={{
              uri: 'https://www.soymotero.net/sites/default/files/2018-10/Cartel%20Aprilia.jpg',
            }}
          />
        </TouchableHighlight>
        </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
   text: {
       color: 'white',
       marginTop: 20,
       marginLeft: 20,
       marginBottom: 10,
       borderRadius: 5,
       fontSize: 18,
       borderBottomWidth: 1,
       borderBottomColor: '#FFB800',
       padding: 4
   },
   scroll: {
       display: 'flex',
       flexDirection: 'row',
       width: 870,
       height: 110,
   },
   foto: {
       width: 200,
       borderRadius: 5,
       marginLeft: 10,
       marginTop: 5,
       height: 100
   },
   detail: {
     width: 100,
     height: 100
   }
  });