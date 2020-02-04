import React, {Component} from 'react';

class Icon extends Component{
    constructor(props){
        super(props)
        this.state ={
                  preference: false,
                  color: false
                  
        } 
        this.handleClick = this.handleClick.bind(this);
    }   

handleClick(e){
    
    var txt = "Dog: no preferences";
    if(this.state.preference === true) {
        txt = "Dogs: allowed";
         
    }else if(this.state.preference === false) {
        txt = "Dogs: not allowed"; 
         
    
    }else{
        this.setState.preference = 0;   
    
        
    }

    this.setState({
        preference : this.state.preference + 1,
        color: !this.state.color,
        text: txt
      })
      
          
}

handleClick1(e){
    
    var txt = "Dog: no preferences";
    if(this.state.preference === true) {
        txt = "Dogs: allowed";
         
    }else if(this.state.preference === false) {
        txt = "Dogs: not allowed"; 
         
    
    }else{
        this.setState.preference = 0;   
    
        
    }

    this.setState({
        preference : this.state.preference + 1,
        color: !this.state.color,
        text: txt
      })
      
          
}

   render(){
    const isGreen = this.state.color;
    return (
        <div style={{
            display: 'flex',
            backgroundColor: '#1abc9c',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '25px',
            marginLeft: '50px',
            borderRadius: '16px'
        }}>
            
            
            

            <button  
             style={{backgroundColor: isGreen?  'green':'white',
               borderRadius: '14px',
               height: '60px',
            width: '80px',
            }}
             onClick={this.handleClick} 
             className={this.state.button ? "buttonTrue": "buttonFalse"} >
                <i className="fas fa-dog fa-2x"> </i>
                
            </button>
        

            <button 
            style={{
            margin: '18px',
            height: '60px',
            width: '80px',
            opacity: 2,
            borderRadius: '14px'}}

            onClick={this.handleClick2}
            className={this.state.button ? "buttonTrue": "buttonFalse"} 
            
            >
                <i className="fas fa-toilet fa-2x"> </i>
            </button>
            
            <button 
            style={{
            margin: '18px',
            height: '60px',
            width: '80px',
            borderRadius: '14px'}}>
                <i className="fas fa-fire fa-2x"> </i>
            </button>

            <button 
            style={{
            margin: '18px',
            height: '60px',
            width: '80px',
            borderRadius: '14px'}} >              <i className="fas fa-bicycle fa-2x"> </i>
            </button>

            



    

        </div>
       )
       
   }
}

export default Icon;