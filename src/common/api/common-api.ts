import axios from 'axios'

export const instance = axios.create({
	baseURL: 'http://localhost:8000/'
})

export const commonAPI = {
	getName() {
		return instance.get<any>('settings')
	},
	updateName(arg: any) {
		return instance.put<any>('settings', arg)
	},
	getDescription() {
		return instance.get<any>('settings/description')
	},
	updateDescription(arg: any) {
		return instance.put<any>('settings/description', arg)
	},
	getImages() {
		return instance.get<any>('images')
	},
	createImage(arg: any) {
		return instance.post<any>('images', arg)
	}
}
