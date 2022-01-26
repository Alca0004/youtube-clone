import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="Have you done these 4 THINGS?? - Getting a job as a Software Developer"
          views="28,308 views"
          timestamp="Jan 19, 2022"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSr_UgsPStQLT4rv8oX8D_j7yq5AMYz7noK1oAYNg=s68-c-k-c0x00ffffff-no-rj"
          channel="Code with Ania Kubów"
          image="https://i.ytimg.com/vi/JxUDdUU6N6k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXUGBzO7ckMEQEQPbTNE2jjzQIzA"
        />
        <VideoCard
          title="Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth)"
          views="380,564 views"
          timestamp="Sep 15, 2020"
          channelImage="https://yt3.ggpht.com/RJ3tn__j7CXEAD_uBsGwtOaNgVhI5D3p0p1MDBII1QAJVRc7h4n6czDtP7CDhxO1lkoAeV2Qeg=s68-c-k-c0x00ffffff-no-rj"
          channel="Karl Hadwen"
          image="https://i.ytimg.com/vi/x_EEwGe-a9o/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB304U_TwgCQbxFggtYr8izmWk0_A"
        />
        <VideoCard
          title="When Should You SHUT DOWN Your Mac? (it might surprise you)"
          views="1,175,517 views"
          timestamp="Mar 29, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLR3ouDeT8e8j5FOsZPjbcQjpBxNjOjLXpK9EuZUVQ=s176-c-k-c0x00ffffff-no-rj"
          channel="Created Tech"
          image="https://i.ytimg.com/vi/uHtnMmL7VGA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCHwGQj_N-A96lZQsckBREV4AOFfA"
        />
        <VideoCard
          title="13) React Navigation y Tab navigation en React Native"
          views="330 views"
          timestamp="Aug 30, 2021"
          channelImage="https://yt3.ggpht.com/G9ggUu8mIRCDobrdlfCS95cdRIeGTMLfFO6YndCnStZEW_LkBanR9vtNHMnYfOrIMYHAN1nFRA=s68-c-k-c0x00ffffff-no-rj"
          channel="ReyTech devR"
          image="https://i.ytimg.com/vi/uUKud3n8si4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDI4t0BNtD37mBHv7qKMumrPIjZwA"
        />
        <VideoCard
          title="THE CUPHEAD SHOW! | Official Trailer | Netflix"
          views="8,082,412 views"
          timestamp="Jan 18, 2022"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTZzZv60B1v76eOC7TsEYZD_TMH2-H5KeYxkfXGBQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://i.ytimg.com/vi/Sel3fjl6uyo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbnDQmW-Df-dbsydLSbxQm2sMz_w"
        />
        <VideoCard
          title="The ancient 'computer' that simply shouldn't exist - BBC REEL"
          views="4,858,495 views"
          timestamp="Jul 28, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTI7q9fhW9ZFH0ZW7Ft1scpfNoTBvbW14SDotMO=s68-c-k-c0x00ffffff-no-rj"
          channel="BBC"
          image="https://i.ytimg.com/vi/qqlJ50zDgeA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBCCxz4unto-uKzLkILxIUVZaPIGg"
        />
        <VideoCard
          title="Adding Google Auth to Expo React Native Apps for Android and Apple"
          views="734 views"
          timestamp="Dec 15, 2021"
          channelImage="https://yt3.ggpht.com/fKsHthuzKCGpWmmtdA-lbkhf1gePa0qMV7KIXTyhpEjMF_4EyrA39Y2XVn_gahuPTYeaSrUxsw=s68-c-k-c0x00ffffff-no-rj"
          channel="MissCoding"
          image="https://i.ytimg.com/vi/QT0PXhH9uTg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4c7CVbTSuebEMMaCVhLYv-1nUXg"
        />
        <VideoCard
          title="VS Code in 100 Seconds"
          views="355,088 views"
          timestamp="Nov 26, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Fireship"
          image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
        />
        <VideoCard
          title="Have you done these 4 THINGS?? - Getting a job as a Software Developer"
          views="28,308 views"
          timestamp="Jan 19, 2022"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSr_UgsPStQLT4rv8oX8D_j7yq5AMYz7noK1oAYNg=s68-c-k-c0x00ffffff-no-rj"
          channel="Code with Ania Kubów"
          image="https://i.ytimg.com/vi/JxUDdUU6N6k/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAXUGBzO7ckMEQEQPbTNE2jjzQIzA"
        />
        <VideoCard
          title="Netflix Clone - React Tutorial - Styled Components - Firebase (Firestore & Auth)"
          views="380,564 views"
          timestamp="Sep 15, 2020"
          channelImage="https://yt3.ggpht.com/RJ3tn__j7CXEAD_uBsGwtOaNgVhI5D3p0p1MDBII1QAJVRc7h4n6czDtP7CDhxO1lkoAeV2Qeg=s68-c-k-c0x00ffffff-no-rj"
          channel="Karl Hadwen"
          image="https://i.ytimg.com/vi/x_EEwGe-a9o/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB304U_TwgCQbxFggtYr8izmWk0_A"
        />
        <VideoCard
          title="When Should You SHUT DOWN Your Mac? (it might surprise you)"
          views="1,175,517 views"
          timestamp="Mar 29, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLR3ouDeT8e8j5FOsZPjbcQjpBxNjOjLXpK9EuZUVQ=s176-c-k-c0x00ffffff-no-rj"
          channel="Created Tech"
          image="https://i.ytimg.com/vi/uHtnMmL7VGA/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCHwGQj_N-A96lZQsckBREV4AOFfA"
        />
        <VideoCard
          title="13) React Navigation y Tab navigation en React Native"
          views="330 views"
          timestamp="Aug 30, 2021"
          channelImage="https://yt3.ggpht.com/G9ggUu8mIRCDobrdlfCS95cdRIeGTMLfFO6YndCnStZEW_LkBanR9vtNHMnYfOrIMYHAN1nFRA=s68-c-k-c0x00ffffff-no-rj"
          channel="ReyTech devR"
          image="https://i.ytimg.com/vi/uUKud3n8si4/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDI4t0BNtD37mBHv7qKMumrPIjZwA"
        />
        <VideoCard
          title="THE CUPHEAD SHOW! | Official Trailer | Netflix"
          views="8,082,412 views"
          timestamp="Jan 18, 2022"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTZzZv60B1v76eOC7TsEYZD_TMH2-H5KeYxkfXGBQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Netflix"
          image="https://i.ytimg.com/vi/Sel3fjl6uyo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCbnDQmW-Df-dbsydLSbxQm2sMz_w"
        />
        <VideoCard
          title="The ancient 'computer' that simply shouldn't exist - BBC REEL"
          views="4,858,495 views"
          timestamp="Jul 28, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTI7q9fhW9ZFH0ZW7Ft1scpfNoTBvbW14SDotMO=s68-c-k-c0x00ffffff-no-rj"
          channel="BBC"
          image="https://i.ytimg.com/vi/qqlJ50zDgeA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBCCxz4unto-uKzLkILxIUVZaPIGg"
        />
        <VideoCard
          title="Adding Google Auth to Expo React Native Apps for Android and Apple"
          views="734 views"
          timestamp="Dec 15, 2021"
          channelImage="https://yt3.ggpht.com/fKsHthuzKCGpWmmtdA-lbkhf1gePa0qMV7KIXTyhpEjMF_4EyrA39Y2XVn_gahuPTYeaSrUxsw=s68-c-k-c0x00ffffff-no-rj"
          channel="MissCoding"
          image="https://i.ytimg.com/vi/QT0PXhH9uTg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA4c7CVbTSuebEMMaCVhLYv-1nUXg"
        />
        <VideoCard
          title="VS Code in 100 Seconds"
          views="355,088 views"
          timestamp="Nov 26, 2021"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTcIl6kKt3lEPJEySUf_hpHiKDKiFeo9eWPReLysQ=s68-c-k-c0x00ffffff-no-rj"
          channel="Fireship"
          image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
