  import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    ActivityIndicator,
    Image
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import React, { useEffect, useState } from "react";
  import { MaterialCommunityIcons } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
  import { signInWithEmailAndPassword } from "firebase/auth";
  import { auth } from "../firebase";
  
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
  
    useEffect(() => {
      setLoading(true);
      const unsubscribe = auth.onAuthStateChanged((authUser) => {
        if (!authUser) {
          setLoading(false);
        }
        if (authUser) {
          navigation.replace("Home");
        }
      });
  
      return unsubscribe;
    }, []);
  
    const login = () => {
      signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential.user;
        console.log("user details", user);
      });
    };
  
    return (
      <SafeAreaView style={styles.container}>
        {loading ? (
          <View style={styles.loadingContainer}>
            <Text style={{ marginRight: 10 }}>Loading</Text>
            <ActivityIndicator size="large" color={"red"} />
          </View>
        ) : (
          <KeyboardAvoidingView style={styles.keyboardView}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: "https://i.pinimg.com/236x/99/12/ab/9912ab1ea05d05f9588a3b42eb0fee02.jpg" }} 
                style={styles.image} 
              />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.titleText}>Sign In</Text>
              <Text style={styles.subtitleText}>Sign In to your account</Text>
            </View>
            <View style={styles.inputContainer}>
              <View style={styles.inputRow}>
                <MaterialCommunityIcons
                  name="email-outline"
                  size={24}
                  color="black"
                />
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  placeholderTextColor="black"
                  style={styles.textInput}
                />
              </View>
              <View style={styles.inputRow}>
                <Ionicons name="key-outline" size={24} color="black" />
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  placeholder="Password"
                  placeholderTextColor="black"
                  style={styles.textInput}
                />
              </View>
              <Pressable onPress={login} style={styles.loginButton}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>
              <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 20 }}>
              <Text style={styles.registerText}>
                Don't have a account?{" "}
                <Text style={styles.signUpText}>Sign Up</Text>
              </Text>
            </Pressable>
            </View>
          </KeyboardAvoidingView>
        )}
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      padding: 10,
    },
    loadingContainer: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flex: 1,
    },
    keyboardView: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      
    },
    image: {
      width: 500,
      height: 150,
    },
    textContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
    },
    titleText: {
      fontSize: 20,
      color: "#318CE7",
      fontWeight: "bold",
    },
    subtitleText: {
      fontSize: 18,
      marginTop: 8,
      fontWeight: "600",
    },
    inputContainer: {
      marginTop: 50,
    },
    inputRow: {
      flexDirection: "row",
      alignItems: "center",
    },
    textInput: {
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "gray",
      marginLeft: 13,
      width: 300,
      marginVertical: 10,
    },
    loginButton: {
      width: 200,
      backgroundColor: "#318CE7",
      padding: 15,
      borderRadius: 7,
      marginTop: 50,
      alignSelf: 'center',
    },
    loginButtonText: {
      fontSize: 18,
      textAlign: "center",
      color: "white",
    },
    registerText: {
      textAlign: "center",
      fontSize: 17,
      color: "gray",
      fontWeight: "500",
    },
    signUpText: {
      color: "#318CE7", // Sign Up metninin rengini burada ayarlayabilirsiniz
      fontWeight: "bold", // İsteğe bağlı: metni kalın yapabilirsiniz
    }
  });
  