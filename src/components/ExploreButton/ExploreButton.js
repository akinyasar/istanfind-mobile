import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function ExploreButton(props) {

  return (
    <TouchableOpacity
      onPress={() => props.onPress()}
      style={[styles.button, styles.buttonOutline]}
    >
      <Text style={styles.buttonOutlineText}>EXPLORE ISTANBUL.</Text>
    </TouchableOpacity>
  );
  
}
ExploreButton.propTypes = {
  onPress: PropTypes.func,
};