import React, { useCallback, useRef, useMemo } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export const DownloadPicture = ({ onClose }) => {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "60%", "100%"], []);

  // callbacks
  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  // render
  return (
    <GestureHandlerRootView style={styles.container}>
      {/* //   <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
    //   <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
    //   <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} /> */}
      {/* <Button title="Close" onPress={() => handleClosePress()} /> */}
      <BottomSheet
        ref={sheetRef}
        index={1}
        onClose={onClose}
        snapPoints={snapPoints}
        // enableDynamicSizing={false}
        onChange={handleSheetChange}
        enablePanDownToClose={true}
        handleIndicatorStyle={{ display: "none" }}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // paddingTop: 200,
  },
  contentContainer: {
    flex: 1,
    width: "100%", // Ensure full width
    alignItems: "center", // Center the content
    justifyContent: "center", // Center vertically
    backgroundColor: "white",
  },
});

// export default DownloadPicture;
