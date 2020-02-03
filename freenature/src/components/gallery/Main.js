import React, { Component } from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'



class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{

                id: '0',
                description: 'bivakzone 1',
                imageLink: 'http://www.bivakzone.be/images/steenberg/steenberg.jpg'
            },
            {

                id: '1',
                description: 'bivakzone 2',
                imageLink: 'https://i.picsum.photos/id/256/500/500.jpg'
            },
            {

                id: '2',
                description: 'bivakzone 3 ',
                imageLink: 'https://i.picsum.photos/id/6/800/800.jpg'
            },
            {
                id: '3',
                description: 'bibvakzone 4',
                imageLink: 'http://www.bivakzone.be/images/steenberg/meerdaalwoud1.jpg'
            },
            {
                id: '4',
                description: 'bibvakzone 5',
                imageLink: 'http://www.bivakzone.be/images/vinne/paalcamping_vinne.jpg'
            }

            ]
        }
        this.removePhoto = this.removePhoto.bind(this);
    }




    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }


    render() {
        return (
            <div>
                <Title title={'Bivakzones'} />
                <PhotoWall posts={this.state.posts} onRemovePhoto={this.removePhoto} />
            </div>
        )
    }
}

export default Main;