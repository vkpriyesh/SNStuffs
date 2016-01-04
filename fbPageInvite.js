// First, open your admin panel on your Facebook page
// Click See All in the "Invite Friends" section
// Scroll to the bottom of the popup window so all of your friends are loaded

// Open your Console in your development tools and enter this Javascript
elms=document.getElementsByClassName("uiButton _1sm");for (i=0;i<elms.length;i++){ elms[i].click()};

// If developer tools aren't enabled, paste this in your address bar
// Note: You might need to manually type the "javascript:" part if you paste
//       this because Chrome strips it when you paste it.
javascript:elms=document.getElementsByClassName("uiButton _1sm");for (i=0;i<elms.length;i++){ elms[i].click()};

// For Events
elms=document.getElementsByClassName("checkableListItem");for (i=0;i<elms.length;i++){ elms[i].click()};
