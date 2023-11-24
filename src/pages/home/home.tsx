import React, { Component } from 'react'
import s from './home.module.scss'

class Home extends Component {
	render() {
		return (
			<div className={s.container}>
				<div className={s.card}>
					<div className={s.name}>Photo gallery</div>
					<div className={s.description}>
						dgdfghdghgfh gfhgfhfgh hgfhgfhgfh hgh hgfh fghfghhgf h hgfhfghgf ghfg h hgfhfghfhhd h fghfghgfh
					</div>
					<div className={s.photos}>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
						<div className={s.photo}></div>
					</div>
					<div className={s.buttons}>
						<button className={s.btn}>left</button>
						<button className={s.btn}>home</button>
						<button className={s.btn}>right</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
