import React, {Component} from 'react'
import axios from 'axios'
export default class App extends Component {
  state={
    repoName:'',
    repoPicture:''
  }
  componentDidMount(){
    const url=`https://randomuser.me/api`;
    axios.get(url).then(response=>{
      const res=response.data;
      const name=res.results[0].name.first;
      const pic=res.results[0].picture.medium

      // console.log(res)
      // console.log(res.results[0].picture.medium)
      this.setState({repoName:name,repoPicture:pic})
    }).catch((error)=>{
      alert(error.message)
    })
  }
  render(){ 
    return(
      <div>{(this.state.repoName)?this.state.repoName:'Loading...'}

      <img src={this.state.repoPicture} alt='.'/>

      </div>

    ) 
  }
}
