import React, { Component } from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetails = props => {
  const { thumbnail_image, title, artist, image, url } = props.album;
  const { thumbnailContainerStyle, thumbnailStyle, headerContentStyles,headerTextStyle, imageStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={headerContentStyles}>
        <Text style={headerTextStyle}>{title}</Text>
        <Text>{artist}</Text>
        </View> 
      </CardSection>
      
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      <CardSection>
        <Button onPress={() => Linking.openURL(url)} >
          Buy Now
          </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height:50,
    width:50
  },
  thumbnailContainerStyle: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  }
}

export default AlbumDetails;
