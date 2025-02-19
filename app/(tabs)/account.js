import { StyleSheet, Text, View, Button } from "react-native"; // Import Button from react-native
import React, { useState } from "react";
import { DownloadPicture } from "../../components/bottomSheet";

const Account = () => {
  // Capitalize the component name
  const [pictureOpen, setPictureOpen] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Account Page</Text>
      <Button title="Open Bottom Sheet" onPress={() => setPictureOpen(true)} />
      {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)} />}
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});
