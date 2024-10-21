import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
  return (
    <div id="error-page" className="error-message">
        <h1>Oops!</h1>
        <p>Un error inesperado fue encontrado :(</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
    </div>
  )
}

export default ErrorPage