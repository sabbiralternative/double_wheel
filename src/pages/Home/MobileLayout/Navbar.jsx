import { useSelector } from "react-redux";

const Navbar = () => {
  const { balance } = useSelector((state) => state.auth);

  return (
    <div className="top-mobile-wr">
      <div className="top-row">
        <div className="top-row-cell small">
          <div className="icon-block">
            <span className="ui-lib-home" />
          </div>
        </div>
        <div className="top-row-cell big">
          <div className="info-block">
            <div className="inner-info-block-undefined inner-info-block-big f-jc-c">
              <div className="info-block">
                <div className="d-in-fl">
                  <div className="inner-info-block-small">
                    <img
                      className="checked-img"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAYAAADIZmusAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAnSSURBVHgB7VpLbFxXGf7OnUdsjx3bMGOnaYBJIK0qSGNeEkKUOLQSXfBws0KqkLJgAQtESneRoI2IQGJD0gUIBKKlFAoSjVE3YUHiAgIkCjhSIYnTpi4kcewkzfgxY49n7j38/3nc19w7nnEdxIJfOnPOPc//+x/nnHv/EdiAJub6x+E4ByDlOCDKArKM/wJJgQokpmnNaTTdZyZ3Vafb9RdpDQqAEE9QcbxtxztIMvo4RcI8NnnXylRS3xb+Jl4fGkLBewKePMLPbs3B7d/3oXo+j9U3cmgsZPUwmbyanVR2sJhMaxQSuVIT+REXww/UULivjnzR1W2OOIGqc2xyd6WSOvfE3FAZwjtFS4wxgJu/KeDW6QG4Kw5Vm5U9M6gNkE1RiBMpzLNDZYdziZFDSxh9ZNl2noZcf2TyrrXZluFKE73eWQaxfjODy98qoXE9C0GCiICQphwGIkJlO2s3AEVrWQEIgZEZIDfaxJ6jN4x2CMyqc9BqxvEnYHOyIL5ZQnOOQDQRpAZ1bug8Uu/Gym6s3Elqtian0VrXJMEyb8wj86p5DuE3jn2Wyxce36FBMGi7iNGIzkWrtGVMqkmaiWup3e5Bao+bF2sE5J4ea2ZHE3uPLyDTRxNK7yBvAFojenfC/KkBZU5IkmyTZnWFbvNiEk169tqUvTbaYWHROsJPQRsMP435rPJfLV3Nu5i4UhhD1vk7q+viYzsUw8p8fG0I7Rsutt7BUzUS5NbZWSMqZXVyBl3c+53rRivyoINs5jCPqZ7fRgyLqIRZOmEQxrzY4VNTt+1eQr0XXU/xFdOsu5yhY6FgoY+z9e3nEp8VlvEgicA/TMJGCV22I6EeUUBqXWMZNnHdCp1turM4QAcExrjcuJHVnWISSWTkTlMcZFyYBkz9jbwdUXaowxCX1hcyAXqViy0B8Y4HlzH64Ro2SyKkIbtjWh4Vzz4QS9RJxCQR8rlNEYP46PGrOPDUvzcHJs0UEQJmyEkcnGCz3dK9j76JAyeuINcvke938dCPZrHvSzfwlimFp2ykwxbQyIequP+LNyivweOzRwlNn4Zcv+fTFfz563dj/uU+vCWSUUvJxhs3Q7kBD7sOLGH3ZxYx8sEaLUD7Ph+erH9Sv5SSNhbOgd7RBj7xg1ksvFzA5RcHsfDXAqrXcmjHcMtdLp63AIk1ptE9n7ulmC/sbGDonjqG967BXomlJ8wU0dU0P9QO3V76QA3F92u/qcxsIzB5la/T+TDz/NuQylcKfwpIt8489ti8mVQzxRJXW6K9UFlzkkacSjMyAjDkpxh8z5pKOx/Q3SNAOmSuVSNxNSaQVLdozahU1mO2asHy1nLX1yANgvsLESwgVZs0WtKmp0oiYeGwaW0EREbeavz10oF4BkTAtp6FOPGsP0CDFIZxpQEZbDmWP88uJiLNXYDRVmBMS3ZlXvVFh7ZVz19D5XwOiYBJLfWAbSt9psqlbRgiv4rwbSyyUc0k85pE0v/R54hM7ZRM6wTEc6VOpB3OldRVmXOdPNq5pKdNi+9KXD7/4yLOfGEPzj01qvuqNr2eR+0tO1gHb5ushmwq3DYqun2pBz0jDTuL31cLyOxaQnMgQ0538SclXKDE9Pb7awqAjO1x9cU2GhGt9XZ+37RazLCNFGpzudA5YUfKFPfS9TM/LeHisxrE2OPXsOMjy1ojZoTdmiuv9qQvnMKTQJKzd3DBqrzWo8ygZToCVVvIoW+k6R+GnDOImec0iP1fvYZdDy3S+LDVmF/Kbp3rSwYgkoHZOZzE7S6cJ9D8Hwf0wWd9wqRXvr8DZw7vJcaLSmPM7MyzAYh9RwjEgxU1hv0nSPSipPwJWLzcRiMiCYu0GhHRPh1ohHeWm6/2YmD3mn+GcPd8SfvNzM9KcEkbq6Sda78dRLbgYd/RK+QXq6i7jvIfdW1R6wj/sFx5vQer87l0AAlGYJuyAS7/ltERzf1pALlyw/cRZqz0qUVIevu8dHIUr/28qBcgEO87fgV9BHqV3ziVCVqDsIAcf85EssylClcmmFaHdPXFYax5DjHnKAbr9GWgjgwGx5dR/vKC6pMhEHu/cRUZAsxtdfqWY/uvUXmNviysqTqh5po/M9h+0Tas+netbg5EJrfq4NYrfSi8t260ElD/eBXvLl/VYN7VVExG5hcwmhC+aVWm+lFfyCYz72ADEnbX2hxdf34Ydx+bN1eV4KBVR8g7m4rhNam5sCe9z5wdwIchNcz/YhgpPHZAMrg0dnOOWFr9Rw/ePDuA3o9XNZNGunoy/uphfC9eH9NgbapgvvIn8tiRyaTffpM+gSbQ7afp28V9DTjFZkjkMMwam+AzRzgxtWhy6QPC0i+3py8Q37FSAKWIIWGyFDCSfGXxu8Po+dot/eWlHSlT0t917QVy9XvDcG9k248RSNRKeLlshNluPd6Q+08KAj0zCOfzK/A395D5RMzWmJza8n9VUGPbkkipi9VHRGFNONKxjTbC5J3ug0u3C/dQzTiwkzzQM7fV5woQp3vRNaUIPKSRuP1KdWoLmX7VaVnjBfrsOptD/dEqvJKMLm62NEGRsN6TBOJ8Dp2QNON1mCGk5dgzX1FmqbqcL7loUFxEhjTSop0ONJP5Ww49/9qO2gSd5B9bD84Kovx5B/0/7INzc8ODQZOIJhlK/MwxRtOvwh/pZ6lY7qHTl+MOaqPh5MUmQedXGGaUGc7/IY+lz66ruu2/3ob8hQw6Ivt+I1rB+PxR4oCp7ohpVsFLpKJxjpwu/aVXdRCmozQv2yL84iQiGm1L+YtZFL+dbWEwjWS8T1gTFCPxo1eciAmO+CryxDmq8qa4N1c6/B6eQRDqskEWP7pqJnaiat6qlCR5vbYMRXhNPfHHwtdAnKcdHYCXU5k+D8WHl6lDKDrkp9aJ7nSyANTaCfyMHlqm6K76ADI1uasybS9Cx3hLLH6yhhy93cmQVsKDOXmcmwUC0KYcHxMKZEbKkWcZSZ5j1kgSqAm75UZdE3NXr9rHIhY5cX37Car9ig1P+zF2G921FzzZudN3TWEnByJWYIEEsXb+TIOTkzuXjpiuhladJ2mm6Rx12HP0JoWAGzRQainkEOS5QDIdp0woz3TQLxtbR60royCAadSZ54gMjFbmhspSeKcEB+PB4ertmH9hwAQizR7MGvFCg7ZKM+GbRMj5WSO8CRUfXiHTX9ZR3HZ/4fDB6L9yPMlmxs9sahzxvf27PipndazRAAoDib9qIP5sCuFXkUQwJuWKDfSWm2pn4h2VNyPVQObEmmj7p5oIIP9vTmI8wvGGJIA74kBd/s0pThMLhTE0xWE4Yj84AmyCp+0pPm34ZaJjgcyCbx1SvgTeYlMA/J/+V+k/EEl1vafhxZ8AAAAASUVORK5CYII="
                      alt=""
                    />
                  </div>
                </div>
                <div className="inner-info-block-big">
                  <div className="user-info-block user_block_info_currency">
                    <div className="user-info-block-r">
                      <img
                        className="coin-img"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      />
                      <p
                        className="user-info-block-r-txt-gold win-color"
                        title="500,000 Fun"
                      >
                        {balance} Fun
                      </p>
                    </div>
                  </div>
                </div>
                <div className="core-play-real-b-holder">
                  <button
                    className="core-button core-button-play"
                    title="Play for real"
                  >
                    Play for real
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="top-row-cell small">
          <div className="settings-block-container">
            <div className="user-image-block">
              <div className="user-image-block_img av-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
