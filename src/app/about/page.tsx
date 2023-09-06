import PageContainer from "@/components/page-container";
import { Paper, Stack } from "@mui/material";

export default function Page() {
  return (
    <PageContainer>
      <Stack spacing={2}>
        <Paper sx={{ padding: 2 }}>
          <h3>About Us</h3>
          <p>
            Anywhere fitness is an fitness company dedicated to tackling the issue of healthy living around the world
            with the use of technology.Anywhere fitness aims to empowers indivuals the ability to track their progress
            and connect with individuals to work towards an healthier lifestyle.
          </p>
          <h3>Our History</h3>
          <p>
            Anywhere fitness was founded back in 2018 , started by our founder, Mr Ong Lai Huat together with his
            friends kok eng song and killian tan.The company was fundeded by the Aiwolres pontomorow associatation with
            generous resources used to develop the web appication.Anywhere Fitness was greatly impacted back in the
            covid-19 period where people went out less which led to a steep decrease in usage.Currently Anywhere Fitness
            is one of the most used app that every user use
          </p>
          <p>
            Anywhere Fitness is a fitness company launched back in 2018 with a mission to use technology to promote a
            healthy lifestyle worldwide. The company was founded by Mr Ong Lai Huat and his friends Kok Eng Song and
            Kilian Tan. Funding was obtained from the Aivolres Pontomoro Association, which provided generous amount of
            resources for the development of this web application
          </p>
          <h3>Our Mission</h3>
          <p>
            The primary mission of Anytime Fitness is to empower individuals with the ability to track their own
            progress and find like mindede people to help one another reach towards a commmon fitness goal.
          </p>
          <h3>Our Challenges</h3>
          <p>
            back in 2019 the company faced an early block to its development due to the COVID-19 pandemic.The company
            notice a steep decline of its user due to tighter resrictions from going out.However with strong
            perserverence the company was able to overcome its first major obstacle and continue on its mission to
            ensure indivuals pursue a healty lifestyle
          </p>
          <h3>Now</h3>
          <p>
            Currently Anywhere Fitness stands as one of the most used and preffered fitness apps in the industry. The
            app has various user preach of its success in helping them achieve their fitness goals and reaching an
            healthier lifestyle. Anywhere Fitness with this , is inspired to continue and work towards a future where
            many more individuals can achieve their fitness goals and lead a heallthier lifestyle
          </p>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <h3>Frequently Asked Questions</h3>
          <b>1. Is this app free?</b>
          <p>Yes! It is all free!</p>
          <b>2. Does this app access my home wifi?</b>
          <p>Only if the users turn on the wifi... Sorry I didn't understand your question. (Ref. Shou Zi Chew)</p>
          <b>3. Does this app access other devices on the home wifi network?</b>
          <p>We don't do anything that is beyond industry norms.</p>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <h3>Contact Us</h3>
          <p>
            Buangkok Green
            <br /> Medical Park 10
            <br /> Buangkok View Singapore 539747
          </p>
          <p>Tel: 6389 2000</p>
          <p>Email: imh_appt@imh.com.sg </p>
        </Paper>
      </Stack>
    </PageContainer>
  );
}