import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollViewComponent,
  ScrollView,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CheckBox from "../../Components/CheckBox/CheckBox";

function StudyAndExam({ navigation }) {
  const [values, setValues] = useState(["WAEC", "NECO", "JAMB", "POST UME"]);
  const [data, setData] = useState([]);

  useEffect(() => {
    let checkValues = values;
    let exams = [];
    const bg = ["#9B51E0", "#6979F8", "#F2994A", "#23809B"];
    checkValues.map((item, i) => {
      exams.push({
        id: i,
        value: item,
        checked: false,
        bg: bg[i],
      });
    });
    setData(exams);
  }, []);

  const oncheck = (item) => {
    let exams = data;
    exams[item.id] = item;
    setData(exams);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          backgroundColor: "transparent",
          paddingVertical: 16,
          paddingHorizontal: 20,
        }}
      >
        <View style={styles.customTab}>
          <View style={styles.customTabItem}>
            <Text style={[styles.customTabText, styles.customTabTextActive]}>
              Studying
            </Text>
          </View>
          <View style={styles.customTabItem}>
            <Text style={styles.customTabText}>CBT</Text>
          </View>
          <View style={styles.border}></View>
        </View>
      </View>
      <View
        style={{
          flex: 7,
          backgroundColopaddingVertical: 16,
          paddingHorizontal: 20,
        }}
      >
        <ScrollView>
          <KeyboardAwareScrollView>
            <View>
              <Text style={[styles.title, styles.titleExt]}>
                Exam questions to include
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                {data.map((item, key) => (
                  <View key={key} style={styles.checkBoxContainer}>
                    <CheckBox item={item} oncheck={(x) => oncheck(x)} />
                    <Text style={styles.checkBoxLabel}>{item.value}</Text>
                  </View>
                ))}
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </View>
    </View>
  );
}

export default StudyAndExam;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5F9",

    flexDirection: "column",
  },
  containerTwo: {
    flex: 3,
    backgroundColor: "red",
    // paddingVertical: 16,
    // paddingHorizontal: 20,
  },
  border: {
    backgroundColor: "#6979F8",
    height: 3,
    borderRadius: 2,
    width: "50%",
    position: "absolute",
    left: 0,
    bottom: -2,
  },
  headerText: {
    color: "#303051",
    fontSize: 26,
    fontFamily: "circular-std-900",
    marginBottom: 5,
  },
  paragraph: {
    color: "#828282",
    fontSize: 13,
    fontFamily: "circular-std-400",
  },
  title: {
    color: "#2F80ED",
    fontFamily: "circular-std-700",
    fontSize: 15,
  },
  titleExt: {
    color: "#303051",
    marginBottom: 16,
  },
  customTab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    backgroundColor: "#fff",
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    elevation: 1,
    position: "relative",
  },
  customTabText: {
    fontFamily: "circular-std-400",
    color: "#999",
  },
  customTabItem: {
    width: "50%",
    paddingHorizontal: 12,
    paddingVertical: 17,
    borderRightColor: "#eee",
    borderRightWidth: 1,
  },
  customTabTextActive: {
    color: "#303051",
    fontFamily: "circular-std-500",
  },
  paragraphLarge: {
    color: "#828282",
    fontSize: 16,
    fontFamily: "circular-std-400",
  },
  link: {
    color: "#2F80ED",
    fontFamily: "circular-std-700",
    fontSize: 15,
  },
  checkBoxContainer: {
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "48%",
    paddingHorizontal: 16,
    paddingVertical: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    marginBottom: 12,
    elevation: 2,
  },
  checkBoxLabel: {
    marginLeft: 16,
    fontFamily: "circular-std-500",
    fontSize: 12,
    color: "#303051",
  },
});
