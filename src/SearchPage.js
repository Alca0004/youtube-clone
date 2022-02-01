import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://yt3.ggpht.com/ytc/AKedOLRSXKqEWY-oybQZO8-_6QMlcy7sBFeDW0IJzHVXUA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Youtube Originals"
        verified
        subs="4M"
        noOfVideos={440}
        description="Discover original series and movies from today's hottest talent."
      />
      <hr />

      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />

      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
      <VideoRow
        views="355K"
        subs="4M"
        description="Visual Studio Code is an open-source lightweight code editor maintained by Microsoft. Get the full VS Code Magic Tricks course to write better code faster https://fireship.io/courses/vscode-tr..."
        timestamp="Nov 26, 2021"
        channel="Fireship"
        title="VS Code in 100 Seconds"
        image="https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCaACYD4dZcFeTXhpZ-3YmnZPDiLQ"
      />
    </div>
  );
}

export default SearchPage;
