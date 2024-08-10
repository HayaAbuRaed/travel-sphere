import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import PhoneNumberIcon from "@mui/icons-material/Phone";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import icon from "src/assets/icon.png";
import styles from "./style.module.css";

export const contactList = [
  {
    name: "github",
    icon: GitHubIcon,
    link: "https://github.com/HayaAbuRaed",
    label: "HayaAbuRaed",
  },
  {
    name: "email",
    icon: EmailIcon,
    link: "mailto:hayaa.aburaed@gmail.com",
    label: "hayaa.aburaed@gmail.com",
  },
  {
    name: "phoneNumber",
    icon: PhoneNumberIcon,
    link: "tel:+970599435933",
    label: "+970599435933",
  },
];

const Footer: FC = () => {
  return (
    <Stack className={styles.footer} px={{ xs: 2, sm: 5, lg: 14 }}>
      <Stack gap={1} justifyContent="center" maxWidth={400}>
        <Stack
          gap={0.75}
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar src={icon} alt="TravelSphere" />
          <Typography variant="h6" fontWeight={500}>
            TravelSphere
          </Typography>
        </Stack>
        <Typography
          variant="caption"
          textAlign={{ xs: "center", sm: "justify" }}
        >
          TravelSphere is a premier travel agency dedicated to providing the
          best deals on travel bookings to its clients. With a team of
          experienced professionals and a wide network of travel partners.
        </Typography>
      </Stack>

      <Stack justifyContent="center" gap={2} minWidth={{ xs: 150, sm: "auto" }}>
        <Stack
          justifyContent="center"
          gap={1.5}
          flexDirection={{ xs: "row", sm: "column" }}
        >
          {contactList.map((contact, index) => (
            <Stack key={index} gap={1} flexDirection="row">
              <Typography
                component="a"
                variant="body2"
                href={contact.link}
                target="_blank"
                color="text.primary"
                className={styles.contact}
              >
                <contact.icon fontSize="small" sx={{ color: "#ffc400" }} />
                <Box display={{ xs: "none", sm: "inline-block" }}>
                  {contact.label}
                </Box>
              </Typography>
            </Stack>
          ))}
        </Stack>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="GrayText"
        >
          Copyright © 2024 Haya Abu-Raed.
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
