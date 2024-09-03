import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post/PostCard";
import UserReelCard from "../../components/Reels/UserReelCard";
import { useSelector } from "react-redux";
import ProfileModal from "./ProfileModal";
const tabs = [
  { value: "post", name: "Post" },
  { value: "reels", name: "Reels" },
  { value: "saved", name: "Saved" },
  { value: "repost", name: "repost" },
];
const posts = [1, 1, 1, 1];

const reels = [1, 1, 1, 1];
const savedPost = [1, 1, 1];
const Profile = () => {
  const { id } = useParams();
  const [value, setValue] = React.useState("post");
  const { auth } = useSelector((store) => store);
  const [open, setOpen] = React.useState(false);
  const handleOpenProfileModal = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Card className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://cdn.pixabay.com/photo/2014/01/13/20/01/pebbles-243910_640.jpg"
            alt=""
          />
        </div>
        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            sx={{ width: "10rem", height: "10rem" }}
            src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"
          />
          {true ? (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Edit Profile
            </Button>
          ) : (
            <Button sx={{ borderRadius: "20px" }} variant="outlined">
              Follow
            </Button>
          )}
        </div>
        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">{auth.user?.firstName + " " + auth.user?.lastName}</h1>
            <p>{auth.user?.firstName.toLowerCase() + "_" + auth.user?.lastName.toLowerCase()}</p>
          </div>
          <div className="flex gap-5 items-center py-3">
            <span>41 post</span>
            <span>35 follower</span>
            <span>5 followings </span>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
              incidunt.
            </p>
          </div>
          <section>
            <Box
              sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
              >
                {tabs.map((item) => (
                  <Tab value={item.value} label={item.name} wrapped />
                ))}
              </Tabs>
            </Box>
            <div className="flex justify-center">
              {value === "post" ? (
                <div className="space-y-5 w-[70%] my-10">
                  {posts.map((item) => (
                    <div className="border border-slate-100 rounded-md">
                      <PostCard />
                    </div>
                  ))}
                </div>
              ) : value === "reels" ? 
                <div className="flex flex-wrap justify-center gap-2 my-10 ">
                  {reels.map((item) => (
                    <UserReelCard />
                  ))}
                </div>:
                value === "saved" ? (
                  <div className="space-y-5 w-[70%] my-10">
                    {savedPost.map((item) => (
                      <div className="border border-slate-100 rounded-md">
                        <PostCard />
                      </div>
                    ))}
                  </div>
                ) 
               : (
                <div>
                  Repost
                </div>
              )}
            </div>
          </section>
        </div>
        <section>
          <ProfileModal open={open} handleClose={handleClose}/>
        </section>
      </div>
    </Card>
  );
};

export default Profile;
