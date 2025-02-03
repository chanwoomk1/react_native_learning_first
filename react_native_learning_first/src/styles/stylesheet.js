import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fullScreenStyle: {
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationScreen: {
    flex: 1,
  },
  navigationBar: {
    flex: 1,
  },
  container:{
    width:"100%",
    backgroundColor:"red",
  },
  buttonRed:{

    backgroundColor:"red",

  },
  mainIconWrapper: {
    position: 'absolute',
    top: "-10%", // 중앙에서 약간 위로 이동
    left: '50%', // 중앙 정렬
    transform: [{ translateX: -25 }], // 아이콘 크기의 절반만큼 왼쪽 이동해서 정확히 중앙 배치
  },
  navigationBarWrapper:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    padding: 10 ,
  }
}
);
