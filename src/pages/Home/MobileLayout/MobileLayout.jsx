import Footer from "./Footer";
import Navbar from "./Navbar";

const MobileLayout = ({ leftWheel, rightWheel, isWin, handleSpin }) => {
  return (
    <div className="mobile-wr">
      <Navbar />
      <div className="middle-mobile-wr">
        <div className="mobile-game-block">
          <div className="mob-game-section">
            <div className="double-wheel-game-block-inner">
              <div className="double-wheel-game-wheel">
                <img
                  src="/web_wheel_left.989d6e8ceed6ca257ce6.png"
                  alt=""
                  style={{
                    transform: `rotate(${leftWheel}deg)`,
                    transitionDuration: "5000ms",
                  }}
                />
              </div>
              <div className="double-wheel-arrows">
                <div className="double-wheel-arrow">
                  <div className="double-wheel-arrow-inner left" />
                </div>
                <div className="double-wheel-arrow">
                  <div className="double-wheel-arrow-inner right" />
                </div>
              </div>
              <div className="double-wheel-game-wheel">
                <img
                  src="/web_wheel_right.3c55c8e32b0bffa533f0.png"
                  alt=""
                  style={{
                    transform: `rotate(${rightWheel}deg)`,
                    transitionDuration: "5000ms",
                  }}
                />
              </div>
            </div>
            {isWin && (
              <div className="double-wheel-win-popup">
                <h4 className="double-wheel-win-title">
                  Congratulations!<span>YOU WIN</span>
                </h4>
                <p className="double-wheel-win-money">0.47 Fun</p>
                <div className="double-wheel-win-coins">
                  <div className="double-wheel-win-coin-col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </div>
                  <div className="double-wheel-win-coin-col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAPCAYAAAA/I0V3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHtSURBVHgBbVLLbtNAFL13xh47ThOcUqAgIUyFxGPTwg42wBeQLtnBH5QvKPmC5A+Q2CEhZYvYVOxYIJFuEVItWIRKSA5xgu3xPDqe5tFGvdLIM5577j3n3EE4E0l/J/Svum3C9C3quIdpnA1au4MYVgLnm8nnR6/8a36XehjO/6lSgeSqN/1VdAx4dA50/PF+e+Nuq09cBJkrmwyogbgUqO+AzERcZvp57fFX25UcdaOQuti1AFEDMeGgirJKhDLlwJMcCMOI1clBRd+Cgpu1Z47vRNVBpAlorc2akTAbVUrg4xKQ0ai5Vds390j4v2IbcSaNrF0gGUEboMwM0CV7k08PnxLK6KicitMUiisgPVto6VY1/M2gTaSgh2VegpYaqKtWAGdO8tQgRP3Clv79/k7SipphcMUHPjKaRLEkiMTqrCQ4DQeQECDVBSW0Mxn+t93Y+mVD01t20GrxRWoKKL0c7vGHB9/dgO6EWw0Atgn873DR0RplAF6LgcjUgCymr9RuMeVx8nMMOv8D3kYD3GYdaD0AZy0AFro2T4x575xdw/69SKXqgDWcqHGjDt4lNrNdW1r5iPeCJ9/erHpsH22WTveBkT2VS/DXPZCFBCXU2+svf3Tm07swjt5FoaNhmwANOcovt1/Hiwd7AkQu3gd0+zEyAAAAAElFTkSuQmCC"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="web-logo-content">
              <img
                className="web-logo-img"
                src="data:image/png;base64,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"
                alt="logo"
              />
            </div>
          </div>
          <div className="mob-game-control-panel">
            <div className="mob-game-control-panel-inner">
              <div className="double-wheel-control-panel-inner-t">
                <div className="double-num-panel">
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t rainbow">x1.9</div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t blue">x4</div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t yellow">x6</div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t light-red">x15</div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t orange">x25</div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="double-chance-items shine">
                    <div className="double-chance-items-b">
                      <span />
                      <var>0.25</var>
                    </div>
                    <div className="double-chance-items-t light-purple">
                      x55
                    </div>
                    <div className="double-chance-col">
                      <div className="double-chance-col-content">
                        <button type="button" className="double-chance-row">
                          100
                        </button>
                        <button type="button" className="double-chance-row">
                          50
                        </button>
                        <button type="button" className="double-chance-row">
                          25
                        </button>
                        <button type="button" className="double-chance-row">
                          10
                        </button>
                        <button type="button" className="double-chance-row">
                          5
                        </button>
                        <button type="button" className="double-chance-row">
                          2
                        </button>
                        <button type="button" className="double-chance-row">
                          1
                        </button>
                        <button type="button" className="double-chance-row">
                          0.5
                        </button>
                        <button type="button" className="double-chance-row">
                          0.25
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleSpin}
                  type="button"
                  className="spin-btn active"
                >
                  SPIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MobileLayout;
