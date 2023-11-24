import React, { Component } from 'react'
import s from './settings.module.scss'
import { commonAPI } from '../../common/api/common-api'

interface SettingsState {
	name: string
	description: string
}

class Settings extends Component<any, any> {
	constructor(props: SettingsState) {
		super(props)
		this.state = {
			name: '',
			description: ''
		}
		this.handleName = this.handleName.bind(this)
	}

	componentDidMount() {
		commonAPI.getName().then(res => {
			this.setState({
				name: res.data.name
			})
		})
	}

	handleName(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState(() => {
			return { name: e.target.value }
		})
	}

	handleDescription(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState(() => {
			return { description: e.target.value }
		})
	}

	render() {
		return (
			<div className={s.container}>
				<div className={s.card}>
					<input value={this.state.name} onChange={e => this.handleName(e)} className={s.name} />
					<input value={this.state.description} onChange={e => this.handleDescription(e)} className={s.description} />
					<div className={s.addPhotos}>Drag photos there</div>
					<button className={s.btn}>Delete ALL Photos</button>
				</div>
			</div>
		)
	}
}

export default Settings
