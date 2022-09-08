<!-- TABLE OF CONTENTS -->
<h2>
    <details open="open">
        <summary class="normal">Table of Contents</summary>
        <h5>
          <ol>
            <li>
              <a href="#about-forte">About FORTE</a>
            </li>
            <li>
              <a href="#forte-start">FORTE Start</a>
            </li>
            <li><a href="#execution">Execution</a></li>
			   <ul>
			   <li>
			   <a href="web">Web</a>
			   </li>
			   <li>
			   <a href="api">API</a>
			   </li>
			   </ul>
            <li><a href="#reports">Reports</a></li>
            <li><a href="#docker">Docker</a></li>
          </ol>
        </h5>    
    </details>
</h2>

<!-- ABOUT THE PROJECT -->

## About Forte

## FORTE Start


## Execution

## Reports

After every test execution allure results folder will be generated in project root folder then run the below commands to generate the allure report

    npx allure generate ./allure-results --clean

Run the below command to open the allure report in the browser

    npx allure open ./allure-report

 - Overall Report
 ![Overall Report](https://user-images.githubusercontent.com/110914539/188542509-093f92b0-468b-4236-9d38-6e2d9fe63546.JPG)

 - Detailed Report
 ![Detailed Report](https://user-images.githubusercontent.com/110914539/188542617-c6fbf2a8-1ab2-459f-a784-621fd38c56fd.JPG)

 - Failed Report
 ![Failed Report](https://user-images.githubusercontent.com/110914539/188542809-b95d7289-b44e-4321-9485-3ee82683c5d9.JPG)


## Docker
**Local Execution**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Prerequisites**<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Installation<br/>
                                                                                                                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Clone the repo using below URL
                                                                                                                  
    https://github.com/akshayp7/playwright-typescipt-playwright-test.git
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      Navigate to folder and install npm packages using:<br/>
 

    npm install

      

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Install Docker app<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3. Run the Docker app<br/>
     For running the tests on Docker container we have to first build a image from Dockerfile and then run the image to spawn container on which the test scripts will run.
     

  For building image from Docker run below command, where path to Dockerfile must be provided after --file tag and name of the image must be provided after -t tag.

    docker build . --file Dockerfile.focal -t crate

  Once the image is generated we can run the image to spawn container and run scrips using below command. In Below Command "playContainer" is name of the container created using "crate" image.

    docker run -it -d --name playContainer crate /bin/bash

 Execute the test script in "playContainer" , run the below command

    docker exec -it playContainer /bin/bash

Now docker container is ready, Run the test scripts using below commands,

    npx playwright test


**CI/CD Execution**<br/>

&nbsp; &nbsp;**FORTE** integrated with Github repository , after every commit to github master the **github action** will be triggered ,<br/>
&nbsp; &nbsp; &nbsp;**GitHub Action Workflow:**<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 1.Code Check out<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 2.Execute the docker file<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.1.Pull Microsoft playwright image<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.2.Create new directory<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.3. Copy and paste source code into new directory<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.4.Install npm and playwright<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.5.Run test cases<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;2.6.Generate Allure result<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 3.Copy allure results from docker container<br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 4. Publish Allure results as artifacts <br/>
       &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; 5. Publish Allure results to Github pages<br/>

 ![Flow](https://user-images.githubusercontent.com/110914539/188542865-f601154e-652d-4ced-9a8b-b790216658bb.JPG)
