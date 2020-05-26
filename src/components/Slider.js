import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 1920,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        display: 'block',
        maxWidth: 1920,
        overflow: 'hidden',
        width: '100%',
    },
}));

const img = {
    display: 'block',
    maxWidth: 1920,
    overflow: 'hidden',
    width: '100%',
}

const tutorialSteps = [
  {
      imgPath:
      'https://drive.google.com/uc?export=download&id=1EQf8oVc5BInmTQSA10Mb5rMc18tVWHHz#.mp4',
          // 'https://www.videvo.net/videvo_files/converted/2016_01/preview/Forest_15_3b_Videvo.mov47209.webm',
  },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2016_11/preview/GOPR6239_1.mov34724.webm',
    },
    {
        imgPath:
            'https://cdn.videvo.net/videvo_files/video/free/2019-05/small_watermarked/190416_10_Drone1_04_preview.webm',
    },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2017_12/preview/171124_B1_HD_001.mp494977.webm',
    },
    {
        imgPath:
            'https://www.videvo.net/videvo_files/converted/2015_05/preview/Barley_3_Videvo.mov94814.webm',
    },
                            // <video autoPlay style={img}>
                            // <source src={'https://video-downloads.googleusercontent.com/AGQNM9JOyHyom7dXGhtfmOI5UIhBObN91xQG8zaqrasPLpch5AUnGAhO754M1-XsXcwRrIYNpw1AjDAP5q9ZTqb3SrrTN_k9MFqyBiHOxdjea7PlEIG76sP7INIbKZk78ESMbwCFMY3K560FpxsVqi9ngQkL56kAp1ryJe2ga81w5i-kAX7g75SkQClNG-7psOPJOEnnAFBKrPQqyiIvopGzhfT7EsVLHH7uQMEIIaYnw3A2LgTG5TM7wEw-PdwR7nG24bRzTBDLLoN54_nb-Xkhf3RKYW40bohk_bBgKwfkdct58RSNEulpDMzw98RZ-7Pph9SZhoXZ8KwtEu0xmc04pp8PK33yHly-LCAFV-YRl262EeaHyCUPKWvhXWxsC6EmwuLSyTOYhKdjPBJMVqSz46YgA3Egx6j5XElE43Hz4Y2dxPFaBmUogrAM6ZiQCSKHIeqHVyRwLYbW0TMBUJvEBKUN86EY6YNL0zd1XDSR37fijr8gI1bQEzDYd5CX-cKLVE2da1ZiU835uJAoMn0YhIRVhTW6uL6YUQk0KKli1GhMBB30oSznGpXXoOCZ2MEerpBRWdH2KH3WGQUNMhqqmfmjdB9YGFGpxLhZSKCR-L3NJeda1g7loP19NgcTCUqBj1zNMaygzicBVYWbtfDa0p3IjLEnBU2_8MoWZW44mjas-Vm7vVTXK4dKkL8hhw0aBZdHfcGBljvqbJvgRjZ441BUFyClX92EJLKI9vzzJRS1qeQ0_4wpf7-aRFyy0OlYmRrLmly1Wq3mNWcFHTnMJFeljpULJe69CBg95KByRHMdsLwCGCQ'}></source>
                            // </video>,
                            // <video autoPlay style={img}>
                            // <source src={'https://video-downloads.googleusercontent.com/AGQNM9KuVwMg7HtH--nIIfryk285njNuTethZ073bcTD2_UgnSSnqGtGSTIiR0DeIfgUs9uxGdeYQF-b24jy7iNu9joT3IiUXXDCdVPmKhFCpnbRtSaaPOoksOKTrE5Ux17J6Kw3pqNoJF_1RLxwUVZiMhXEsnYTtCJx-Xp2XT384a4bdtIxIThbKdgT_hgxliucVY911PNg06m1egGpZjSx1KON1mpgDaLlo-a5Igpsl4jr3DuA54I17An4AwSoS3D_dyhHZeJTpIbT_QV0GTFXn4ESeWh5qBzC_VfqdCn44b1-2OD949S2xZxY0h5RZZuun6KB6wuuwQHSjblK2XmQhAb8WEDke6A4Z_3e44JwADb1SYqUqAYLHAy69VWTvoCUhFLNMUgT4jyZdCmlvdzTARDA9anahsWOxl-RnbgPG2p1YX2zEytqN_wu_zGJMaZJLBGneOcb3nc9vt_gXiyvjov-4K3wCK3qHwbhhm5l7GWWLsIcAj-N_2T-uMPsH22lAGXB-4-sOegBZzJ3Q8iUEgWGtkA_3d09ATQB9jEIgngrVB-vPL_R7W7hZysPBoL1P_o2DrOrRpp7f5pDL9aPbbmT3-yoA2PRAZO5sa7gmFUlfeexBnx_cgApGUCAbI5wZ6BdXgmeP5QKHx5B8PqqgDf5yuZqTZYfM9v2CUtBGh_o1mYJ_ILgcskv6trNltN77sRRp4JeJhWWjq1WKwVsj9VaAnzOupLk7Oq3uIYqEQS8pnk3fd5LVGK56xfVT6eqX4izxE6L-e-7xFevVC2MepJpGSxftUjXv794T8USqx92wdXgU2k'}></source>
                            // </video>,
                            // <video autoPlay style={img}>
                            // <source src={'https://video-downloads.googleusercontent.com/AGQNM9LW1b6dfX6Dj_LWg5xY8p9XFXN7bEap9ycL1Y_ytQS43Y_B4UY3DRCkPFNod36smvM3z_Vcajlm7EQ2dr_C6hwrItY68vb9AHSPOJ9qLM_ZZzekYmqsgJ5fC9qh0gYydU_0JKWk6GlsF__t0E7WgIxV69K78fsEJz-UKgI5Y6kD5pgHgQ7vqUNxohSSPwep7Pss2K5DK2Kja6jzvf58TalWlvI25OGc6yEs5F5CkfREa1B49_NSk7dwJ9yPG61DjevZeBWkZdm15xPWFhbPUFykxaL508-UnL8ZB520K3_RgAOJmXeJp7YNlMa5pGs3SzHUIld6EwRF0bXIo87jgtircQHSMLLRoV5usEKPORFStAfqWrs23hnSMGDLE30cxiskbph2L7LNpPeAn2Oxnzsj0xnPTgT6eVATNfsdr94VZORwqxbWWqsJFl5jeNffBb61NjqRKQPQAT_Ev3ZOrGfzAH0yecO9uUXxBfvNYN24HWjAG8uKzpA9GBz1vyVH1WS2-6_s-Ab2XyTcOSFWHWTrPIg4utl2KQDaj7MRjd3re1HqEqm-SWlt0bMarIjuoJs5F4R9Dm1UhJNqQErwDMHxAV0U3p3Ok9X2k-2KtFYz095FcAeh1xdTf_n-5PJJkfltRnDPEMqa-fFFNBa5RDOGHuTfN7zyjFsr6-uesIx1RTQYYRM0XfDVSSmVrdILncfcBTsyprF64GdFG69W1b402adWB9uwg05QRUaZU_isQkwIW1Rw9Sc-mgueccvzCpFjo4LPtXPNoqvupyBGqe6LeY5kVNZtw3C_A5j9n6aXcNMlpwE'}></source>
                            // </video>,
                            // <video autoPlay style={img}>
                            // <source src={'https://video-downloads.googleusercontent.com/AGQNM9KFbgXgmpwTlIpNhridciqaU-C-LFfD_1zPCAjOnjDp31n2ypOIv3SRtoZAdM7KkwGQAQH-DvFT3PJMIJS7YP4OwoD5mlLC3xWTAPAzxgWK8xxVaAa0lyy8YlekqZegc1FI95UAbCGdWAsdcD2rGeBx1jqawTBsQfZ8xjj5cfjmf5DH8yFzbcAG1ew9JltFTpMUalXjapsIgQtUTV0UvdtNfwTMuNYjKge9im26j3mlhtTKlWsZpZGuZoctVGAiJ8RZ3T2KD8CMPeDwZRNPNvq1rgD4rsEzg7hn1kKabm0hIvbzrH5RzFs1xgKavmWZMD5EdDkiqsIxitTeRy7FV8NVl90WNnqJVh6Xpa7bNcKFpvFriTvXI9rqnOuNFOQdAHJooWVuqg_0URPaTikEO2G96_LDQEtiUwb4QB-d86qdUQriKEiHlmT6uUCE4WRIJv8WfZZx-LUT6rwjavLjwokMkXpahUtkKfrwrGAWPip7NCzKSfUIugfefR4fRTcMPwvL8dAUQYQTILEH5c1Ouj2bXCXakRogGDlHamrPke3VSnl8rIyVAyQfHgFUpukqiL8ZWhPQY3oo7Df0Mq3MJ8JIfYeuQ6UdjQeLYoSChJWhxlPMv-Y5h5Zoe6jHXYUvOr_jthLhFa6h1Gd3Q_x7OCUVqOgmHxdy55qsO4VblDtK1tvnB9HfmI75UEm64fFcgJqWvndfpW7i7exVMeLdTbo0Mf25JITQ51Vmtf4cGY6rHqo82KnlfO8IR1AJ0u1DRFh5aU9MK8-NCKg8W321o2eGEZda7sqTPgRVpUluj0r0QF4fV08'}></source>
                            // </video>,
                            // <video autoPlay style={img}>
                            // <source src={'https://video-downloads.googleusercontent.com/AGQNM9Iqmm1gkT1M4AprID3UD688xi8pPTnEL7bHuNpTMn9K36UAQ0zKKB0MjXSibgl1LUy9vBby4RQhikgasZJpwyFKikuthIP8mKvdfX7x5N5m-xMqvr6ZN2q2WjKZxRL5Xr_4KJ0cPW9tjC6Szj44RRGRjceEsEg3WR8wi55Nh2dpKzeXVBeiAt1Gxto6JLF6qTctWnt3hSNHIhuqj-XAWsAdBjm2KWUa6md_J7uMzFy3XZ4regohOeDU7r0qHbw4SXRqm-ss8Zvd4qW0t9rQmUkUzYkusUxab4qtMjxA-x0jcjIdJlGQ17cj4x9NUSLpsjj6WPCMg_TV6Qmsh4YPtnmVTNInumAAFQ9JCHzZ78jLw5EJbJpQnhxLjfh6pBf8KcqmOA1ADzZLnKknvAY4_A9955LJrQzais-LZIuGvH6rs1kNT101LQZ2rCOr5HHVGj17YEfvjUlwQM_nGTSE7l7lYi7IS0ScyZnGDXcW047opLC9cAQEA2Uy25RQQ5_BehxjR3QGKNNy8fNVR4mlvB46AD9SytZRQ1NEml_MaX5vOwTuiKZcHwhPN-VNio5oNuGvZgYmQ67U5Mv1ej61bOAUn0ejt5G-zDONUF8ShgVDQCDBRTRgMyTuctKIzzdDwsiKDg9HvwalYpNZa37udZ2SSJvCncEVPOG5-htfP_-STPOta9qC2-T1zbSzUyojEqS1pZYGyy0P_fLcUeVBSkkewP5NG0cnpFcX5p7D57G5Mfa3-_Dzsn5yGrKAyvRoPvZTPeEP-GOQbg_bbu86lFtVAK2PIMP9I925rlGSuWwUR70NY8s'}></source>
                            // </video>,
];

function SwipeableTextMobileStepper() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleStepChange = step => {
        setActiveStep(step);
    };

    return (
        <div className={classes.root}>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {tutorialSteps.map((step, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <video autoPlay muted style={img}>
                          <source src={tutorialSteps[activeStep].imgPath}></source>
                          </video>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </div>
    );
}

export default SwipeableTextMobileStepper;
