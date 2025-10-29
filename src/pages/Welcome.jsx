import React from "react";
import {
  Box,
  Button,
  Typography,
  Stack,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <>
      {/* 🌅 Hero Section */}
      <Box
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1470&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 5,
            borderRadius: 2,
            boxShadow: 6,
            textAlign: "center",
            bgcolor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            maxWidth: 600,
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={3}>
            Discover Your Ikigai
          </Typography>
          <Typography variant="h6" mb={4}>
            Find what you love, what you’re good at, what the world needs, and what you can be paid for.
          </Typography>

          <Button
            component={Link}
            to="/account-setup"
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#2a9d8f",
              "&:hover": { bgcolor: "#21867a" },
              borderRadius: 3,
            }}
          >
            Begin My Journey
          </Button>
        </Box>
      </Box>

      {/* 🌱 About / Philosophy Section */}
      <Box sx={{ py: 8, px: { xs: 3, md: 10 }, bgcolor: "#f9f9f9" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          color="primary"
        >
          The Philosophy of Ikigai
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          alignItems="center"
          mb={8}
        >
          <Box flex={1}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              What is Ikigai?
            </Typography>
            <Typography variant="body1" mb={3}>
              <b>Ikigai</b> (生き甲斐) is a Japanese concept that means “a reason for being.”
              It lies at the intersection of four elements — what you love,
              what you’re good at, what the world needs, and what you can be paid for.
            </Typography>
            <Button
              component={Link}
              to="/account-setup"
              variant="outlined"
              color="primary"
              sx={{ borderRadius: 3 }}
            >
              Start Finding Yours
            </Button>
          </Box>

          <Box
            component="img"
            src="https://miro.medium.com/v2/resize:fit:1400/1*vWqEgrWzxH_Nqeqz39sFeA.jpeg"
            alt="Ikigai Diagram"
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: 500,
              borderRadius: 2,
              boxShadow: 4,
            }}
          />
        </Stack>
      </Box>

      {/* 💬 Testimonials Section */}
      <Box sx={{ py: 8, px: { xs: 3, md: 10 }, bgcolor: "white" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          mb={6}
          color="info"
        >
          What Our Users Say
        </Typography>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={5}
          justifyContent="center"
          alignItems="stretch"
        >
          {/* Testimonial 1 */}
          <Card sx={{ flex: 1, p: 2, boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="User 1"
                sx={{ width: 64, height: 64, mb: 2, mx: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold">
                Aisha Verma
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                “The Ikigai Finder helped me reflect deeply on what truly brings me joy and fulfillment.”
              </Typography>
            </CardContent>
          </Card>

          {/* Testimonial 2 */}
          <Card sx={{ flex: 1, p: 2, boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src="https://randomuser.me/api/portraits/men/37.jpg"
                alt="User 2"
                sx={{ width: 64, height: 64, mb: 2, mx: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold">
                Rohit Sharma
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                “It’s not just an app—it’s a self-discovery journey that gave me direction in my career.”
              </Typography>
            </CardContent>
          </Card>

          {/* Testimonial 3 */}
          <Card sx={{ flex: 1, p: 2, boxShadow: 4, borderRadius: 3 }}>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                src="https://randomuser.me/api/portraits/women/66.jpg"
                alt="User 3"
                sx={{ width: 64, height: 64, mb: 2, mx: "auto" }}
              />
              <Typography variant="h6" fontWeight="bold">
                Meera Nair
              </Typography>
              <Typography variant="body2" color="text.secondary" mb={2}>
                “Beautifully designed and meaningful—helped me visualize my passions clearly.”
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
    </>
  );
}

export default Welcome;
