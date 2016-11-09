import React from 'react'
import {test,getDockerProcess,getDockerImages,getDockerInfo} from '../actions/actions'
import rawStore from '../configureStore.js'
import { connect } from 'react-redux'
import DockerPSContainer from './DockerPSContainer.jsx'
import DockerInfoContainer from './DockerInfoContainer.jsx'


const store=rawStore()
var DashBoard = React.createClass({
	componentWillMount : function(){
		
		this.props.dispatch(getDockerProcess())
		this.props.dispatch(getDockerImages())
		this.props.dispatch(getDockerInfo())

			},
			 reactiveDashboard :function(){
				this.props.dispatch(getDockerImages())
			},
			componentDidMount : function(){
				// reactiveDashboard = setInterval(this.reactiveDashboard,1000)
			},
			componentWillUnmount : function(){
				console.log("ss")
				clearInterval(reactiveDashboard)
			}
			,
	render : function(){
				var dockerPSdata = this.props.data.dockerps || ""
				var dockerImagesData = this.props.data.dockerimages || ""
				var dockerinfo = this.props.data.dockerinfo || ""
				console.log(dockerinfo)
				// setTimeout(function(){var datas = store.getState();console.log(datas)},2000)

		return (
				<div className="container height-100 width-100 ">
				<div className="row margin-align height-50">
				<div className="col-md-4 margin-top-25 height-100"><DockerInfoContainer  name="Containers"  data={dockerinfo} ></DockerInfoContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerPSContainer name="Docker Process"  data={dockerPSdata} ></DockerPSContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerPSContainer name="Images" dispatch={this.props.dispatch} data={dockerImagesData} ></DockerPSContainer></div>


				</div>
				<div className="row margin-align height-50 ">
				<div className="col-md-4 margin-top-25 height-100"><DockerPSContainer   data={dockerPSdata} ></DockerPSContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerPSContainer   data={dockerPSdata} ></DockerPSContainer></div>
				<div className="col-md-4 margin-top-25 height-100"><DockerPSContainer   data={dockerPSdata} ></DockerPSContainer></div>

				</div>


				</div>
			)
	}

})


export default DashBoard