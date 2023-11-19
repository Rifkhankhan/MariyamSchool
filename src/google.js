import React from 'react'

import { GoogleLogin } from '@react-oauth/google'

const google = ({setCredantial,responseHandler}) => {
  
	return (
		<GoogleLogin
			logo_alignment="center"
			width="0%"
			onSuccess={credentialResponse => {
				setCredantial(credentialResponse)
        responseHandler(credentialResponse)

			}}
			onError={() => {
				console.log('Login Failed')
			}}
		/>
	)
}

export default google
