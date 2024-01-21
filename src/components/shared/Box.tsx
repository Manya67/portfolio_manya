import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import {
  boxProps,
  educationTabs,
  workExpTabs,
} from "../../constants/TimeLineData";

const Box = ({ heading }: boxProps) => {
  return (
    <div className="w-1/2 h-80 overflow-y-scroll p-2 shadow-lg rounded-md border-blue border-[2px]">
      <h1 className="text-xl px-4 font-mono">{heading}</h1>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {(heading === "Education" ? educationTabs : workExpTabs).map(
          (tab, index) => {
            return (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color={tab.active ? "success" : "grey"} />
                  {index <
                    (heading === "Education" ? educationTabs : workExpTabs)
                      .length -
                      1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ pt: "2px", px: 2, pb: "12px" }}>
                  <Typography variant="h6" component="span">
                    {tab.name}
                  </Typography>
                  <Typography>{tab.desc}</Typography>
                  <Typography>{tab.date}</Typography>
                </TimelineContent>
              </TimelineItem>
            );
          }
        )}
      </Timeline>
    </div>
  );
};

export default Box;
