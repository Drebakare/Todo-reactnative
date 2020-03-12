//import
import React from 'react';
import { View, Text, TextInput, Button,} from 'react-native';
//create things
class App extends React.Component{
  state = {
    text: "This is our message",
    todo: []
  }

  addTodo = () =>{
    var new_todo = this.state.text;
    var arr = this.state.todo;
    arr.push(new_todo);
    this.setState({todo:arr, text:""});
  }

  deleteTodo =(t)=>{
    var arr = this.state.todo;
    var position = arr.indexOf(t);
    arr.splice(position, 1);
    this.setState({ todo: arr, text: "" });
  }

  renderTodo = () =>{
    return this.state.todo.map(t=>{
      return (
        <Text
        onPress={()=> {this.deleteTodo(t)}}
        key={t}>{t}
        </Text>
      )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.ViewStyle}>
          <Text style={styles.headerStyle}>Note App</Text>
          <TextInput
            style={styles.InputStyle}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
          />
          <Button style={styles.ButtonStyle} title="Add Todo" color="green"
            onPress={this.addTodo}
          />
          {this.renderTodo()}
        </View>
      </View>
    );
  }
}
 
const styles = {
  wholeStyle: {flex: 1, backgroundColor: '#03A9F4',},
  ViewStyle : { marginTop: 30, alignItems: 'center', justifyContent: 'center', margin: 10, },
  InputStyle: {height: 20, borderColor: 'white', borderWidth: 1, width: 200, marginTop: 20, marginBottom: 20, },
  ButtonStyle: {marginTop: 10,},
  TextStyle: {color:'white'},
  headerStyle: {color:'white', fontSize: 30,fontWeight: 'bold',},
}
//export
export default App; 