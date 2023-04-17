import { Component } from 'react'

import { signUp } from '../utilities/users-service'
import FooterSmall from './FooterSmall'

export default class SignUpForm extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      confirm: '',
      error: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault()
    try {
      const formData = { ...this.state }
      delete formData.error
      delete formData.confirm
      const user = await signUp(formData)
      this.props.setUser(user)
    } catch (error) {
      this.setState({ error: 'Sign Up Failed' })
    }
  }

  render() {
    const disable = this.state.password !== this.state.confirm

    return (
      <main>
        <section className="absolute w-full h-full">
          <div className="absolute top-0 w-full h-full bg-gray-900"></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="text-center mb-3">
                      <h6 className="text-gray-600 text-sm font-bold">
                        Welcome to Teacher's Aid
                      </h6>
                    </div>
                    <div className="btn-wrapper text-center"></div>
                    <hr className="mt-6 border-b-1 border-gray-400" />
                  </div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-gray-500 text-center mb-3 font-bold">
                      <small>Sign Up </small>
                    </div>
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={this.handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Name"
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Email"
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={this.state.password}
                          onChange={this.handleChange}
                          required
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Password"
                          style={{ transition: 'all .15s ease' }}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-gray-700 text-xs font-bold mb-2"
                          htmlFor="confirm"
                        >
                          Confirm Password
                        </label>
                        <input
                          className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                          placeholder="Confirm password"
                          type="password"
                          name="confirm"
                          value={this.state.confirm}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          disabled={disable}
                          className="bg-purple-500 text-white active:bg-purple-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                          style={{ transition: 'all .15s ease' }}
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="error-message">&nbsp;{this.state.error}</p>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    )

    // //SIMPLE RETURN
    //     return (
    //       <div>
    //         <div className="form-container">
    //           <form autoComplete="off" onSubmit={this.handleSubmit}>
    //             <label>Name</label>
    //             <input
    //               type="text"
    //               name="name"
    //               value={this.state.name}
    //               onChange={this.handleChange}
    //               required
    //             />
    //             <label>Email</label>
    //             <input
    //               type="email"
    //               name="email"
    //               value={this.state.email}
    //               onChange={this.handleChange}
    //               required
    //             />
    //             <label>Password</label>
    //             <input
    //               type="password"
    //               name="password"
    //               value={this.state.password}
    //               onChange={this.handleChange}
    //               required
    //             />
    //             <label>Confirm</label>
    //             <input
    //               type="password"
    //               name="confirm"
    //               value={this.state.confirm}
    //               onChange={this.handleChange}
    //               required
    //             />
    //             <button type="submit" disabled={disable}>
    //               SIGN UP
    //             </button>
    //           </form>
    //         </div>
    //         <p className="error-message">&nbsp;{this.state.error}</p>
    //       </div>
    //     )
  }
}
