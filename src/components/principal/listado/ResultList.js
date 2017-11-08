import React from 'react';
import Card from '../../card/Card';
import {StatusBar} from 'react-native';
import {Content} from 'native-base';

export const ResultList = ({results}) => {
    return (
        <Content>
            <StatusBar backgroundColor="#802154" barStyle="light-content"/>
            {results.map((p,index)=><Card
                key={index}
                p={p}
            />)}

        </Content>

    );
};
