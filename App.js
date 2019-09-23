/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, {Component, Fragment} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {LoremIpsum} from 'lorem-ipsum';


import * as Animatable from 'react-native-animatable';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import GestureRecognizer from 'react-native-swipe-gestures';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
};

class App extends Component {

    onSwipeUp = (state) => {
        if (this.scrollableView != null) {

            this.scrollableView.transitionTo({top: 0}, 1000)
        }

        console.log('test -->');
    };

    onSwipeDown = (state) => {
        if (this.scrollableView != null) {

            this.scrollableView.transitionTo({top: 301}, 1000)
        }

        console.log('test -->');
    };

    render() {
        return (
            <Fragment>
                <View style={{height: 300, width: '100%', backgroundColor: 'red'}}/>




                <Animatable.View ref={(ref) => this.scrollableView = ref}
                                 style={{flex: 1, height: '100%', position: 'absolute', top: 301, zIndex: 10, backgroundColor: 'white'}}>

                    <GestureRecognizer

                        onSwipeUp={(state) => this.onSwipeUp(state)}
                        onSwipeDown={(state) => this.onSwipeDown(state)}
                        config={config}
                        style={{
                            flex: 1,
                            backgroundColor: 'orange'

                        }}
                    >

                        <View style={{flex: 1}}>
                            <Text>{lorem.generateSentences(50)}</Text>

                        </View>

                    </GestureRecognizer>
                </Animatable.View>



            </Fragment>

        );
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

});

export default App;
