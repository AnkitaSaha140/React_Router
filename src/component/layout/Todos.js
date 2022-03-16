import React, { Component } from 'react';
import axios from 'axios';
export default class Todos extends Component {
    constructor(){
        super();
        this.state={
            
                listOfTodos:[],
                listOfComments:[]
            
        }
    }

     componentDidMount(){
        
        axios.get(`https://jsonplaceholder.typicode.com/todos`)
        .then(resp =>{
            
            this.setState({
                listOfTodos:resp.data
            })
        }).catch(err=>{
            
        })

      /*   axios.get(`http://localhost:6700/comments`)
        .then(resp=>{
            debugger
            this.setState({
                listOfComments:resp.data
            })
        }).catch(err=>{
            debugger
        }) */

        fetch(`http://localhost:6700/comments`,{
            method:'GET'
        }).then(resp=>resp.json()).
        then(resp=>{
            this.setState({
                listOfComments:resp
            })
        }).catch(err=>{

        })
     }
  render() {
      const {listOfTodos ,listOfComments} =this.state;
    return (
      <div>
          <center>
        {
            listOfTodos.map((item,index)=>{
                return(
                    <ul>
                        <li>{item.title}</li>
                    </ul>
                )
            })
        }
        </center>
        <center>
        <div ><h1>************Comments**********</h1>
        {
            listOfComments.map((item,index)=>{
                return(
                    <ul>
                        <li>{item.postId}</li>
                    </ul>
                )
            })
        }
        </div>
        </center>

      </div>

     
    );
  }
}
