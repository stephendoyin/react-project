import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Check from "../Icons/Check/Check";

export default class CheckBox extends Component {
  constructor(props) {
    super();
    this.state = {
      Data: props.item,
    };
  }

  onCheck() {
    const exam = this.state.Data;
    exam.checked = !exam.checked;
    this.setState({ Data: exam });
    this.props.oncheck(exam);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.onCheck()}>
        {this?.state?.Data?.checked ? (
          <View
            style={[
              styles.checkBackground,
              { backgroundColor: this.state.Data.bg },
            ]}
          >
            <Check />
          </View>
        ) : (
          <View style={[styles.uncheckedBackground]}></View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  checkBackground: {
    // backgroundColor: "#9B51E0",
    height: 24,
    width: 24,
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  uncheckedBackground: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
});
