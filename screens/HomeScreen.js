import { render } from "react-dom";
import { Text, View, TouchableOpacity, TextInput, Searchbutton,TextComponent, StyleSheet,Constructor} from 'react-native';
export default class HomeScreen extends React.Component{
  constructor() { 
    super(); 
    this.state = { 
      text: '', 
      isSearchPressed: false, 
     wordSearched:"",
     wordReturnedfromDatabase:"", 
      word : "Loading...", 
      lexicalCategory :'', 
      definition : "" 
    }}
  getWord=(word)=>{
    var text=word.toLowerCase()
    try{
      var word = dictionary[text]["Word"]
      var defination=dictionary[text]["Defination"]
      var lexicalCategory=dictionary[text]["LexicalCategory"]
      this.setState({
        "word":word,
        "defination":defination,
        "lexicalCategory":lexicalCategory
      })
    }
   catch(err){
     alert("Sorry Ths Word Is Not In Database")
     this.setState({
      "text" : "",
    "isSearchPressed" : false,
    })
   }
      }
     
  
  
        

  render() {
        return (
          <View>
             <View style={styles.container}>
<Text style={styles.detailsTitle}>
  word:{""}
</Text>
<Text style={{fontSize:18}}>
  {this.state.word}
</Text>
<Text style={styles.detailsTitle}>
  Type:{""}
</Text>
<Text style={{fontSize:18}}>
  {this.state.lexicalCategory}
</Text>
<Text style={{flexDIrection:'row',flexWrap:"wrap"}}>
  Defination:{""}
</Text>
<Text style={{fontSize:18}}>
  {this.state.defination}
</Text>
</View>
          <TextInput
            style={styles.inputBox}
            onChangeText={text=>{
                this.setState({
                    text:text,
                    isSearchPressed:false,
                    word:"Loading...",
                    lexicalCategory:'',
                    examples:[],
                    defination:""
                });
            }}
            
          value={this.state.text}
          />
            <TouchableOpacity style={styles.SearchButton}
            onPress={()=>{
this.setState({isSearchPressed:true});
this.getWord(this.state.text)
            }}>
          submit    
          </TouchableOpacity>
          </View>
        )
            
      }
 
    }
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  inputBoxContainer:{
    flex:0.3,
    aliignItems:'center',
    justifyContent:'center'
  },
  inputBox:{
    width:'80%',
    alignSelf:"center",
    height:40
  }
})