import React from "react";
import MovieData from "./MovieList";
import { FavMovie } from "./utils/Data";
// import Data from "./ItemData";

class ContainerData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dataList: FavMovie()
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const dataList = this.state.dataList.filter(contact => contact.id !== id);
        this.setState({dataList});
    }

    render(){
        return(
            <div className="containerData">
                <h1 className="header">Data Favorite Movies</h1>
                <MovieData dataList={this.state.dataList} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}

export default ContainerData;