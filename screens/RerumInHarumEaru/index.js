import { CheckBox } from "react-native-elements";
import { TextInput } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const RerumInHarumEaru = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Text style={styles.RGqPGjig}>Lorem ipsum…</Text><TextInput style={styles.BhZHINDJ}></TextInput><CheckBox style={styles.YZvlGxbX} title="Checkbox Title"></CheckBox></ScrollView>
    <Text style={styles.QmRzYjHl}>Lorem ipsum…</Text></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  QmRzYjHl: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  RGqPGjig: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  BhZHINDJ: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  YZvlGxbX: {
    width: 183,
    height: 69
  }
});
export default RerumInHarumEaru;