import Layout from "../modules/layouts/Layout"

const Home = ({data}) => {
    return (
        <Layout data={data}/>        
    )
}

Home.getInitialProps = async () => {
  const res = await fetch('https://api.minetools.eu/ping/play.mineway.org/25565');
  
  try {
    const json = await res.json();
    
	if (!json.ok) {
		return {data: undefined}
	}
	
    return {data: json}

  } catch(error) {

    return {data: undefined}

  }
}

export default Home;