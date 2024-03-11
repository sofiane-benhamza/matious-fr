import Head from 'next/head';
import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();


  const CloudCard = (label, description, name, review) => {
    return (<div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card text-dark card-has-bg click-col">
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <small className="card-meta mb-2 text-muted">
              What is the difference?
            </small>
            <h4 className="card-title mt-0">
              <a className="text-dark" href="#">
                {label}
              </a>
            </h4>
            <small>
              {description}
            </small>
          </div>
          <div className="card-footer">
            <div className="media">
              <img
                className="mr-3 rounded-circle"
                src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1708338601~exp=1708339201~hmac=55c95f7db9501c2173d61f618654901f9ab2a9ac256e937e9a08f644db21770c"
                alt="Generic placeholder image"
                style={{ maxWidth: "50px" }}
              />
              <div className="media-body text-light">
                <h6 className="my-0 text-light d-block">{review}</h6>
                <small>{name}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
  }

  return (
    <div>
      <Head>
        <title>Matious Cloud Provider Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center mb-5">
              <h2 className="text-light">Managing</h2>
              <h1 className="display-4 font-weight-bolder">
                Cloud Providers Easily{" "}
              </h1>
              <p className="lead">
                The most trusted way to manage cloud services :){" "}
              </p>
            </div>
          </div>
          <div className="row w-100">
            {CloudCard("AWS, AZURE and GCP Service Integration", "Leverage built-in integrations with US such as AWS EC2, VPC, IAM, AZURE VMs, GCP Compute Units", "AWS", "Easiest Ever")}
            {CloudCard("Resources Time Saving", "Reduce the time you lose when it's about creating resources using cloud providers", "GCP", "Bestest Ever")}
            {CloudCard("Don't worry about costs anymore, we give you 100% control", "Secure, control, and well-managed your resources perfectly.", "AZURE", "Most Perfect")}
          </div>
        </div>
      </section>
    </div>
  )
}