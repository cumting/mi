;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-icon07" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M369.804288 882.88768c-5.823488 0-11.676672-1.97632-16.479232-6.02112-10.814464-9.10848-12.19584-25.259008-3.088384-36.072448l271.176704-321.946624-258.6624-309.325824c-9.069568-10.846208-7.629824-26.990592 3.216384-36.061184 10.846208-9.068544 26.990592-7.6288 36.06016 3.217408l272.44544 325.808128c7.970816 9.532416 7.94624 23.410688-0.058368 32.914432l-285.017088 338.378752C384.333824 879.791104 377.09312 882.886656 369.804288 882.88768z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M445.150988 851.897294m-71.372537 0a69.747 69.747 0 1 0 142.745075 0 69.747 69.747 0 1 0-142.745075 0Z"  ></path>' +
    '' +
    '<path d="M775.150864 851.897294m-71.372537 0a69.747 69.747 0 1 0 142.745075 0 69.747 69.747 0 1 0-142.745075 0Z"  ></path>' +
    '' +
    '<path d="M895.056768 724.676797l-576.12139 0c-9.4093 0-17.605983-6.41613-19.866467-15.549138L176.027597 212.000392 62.085522 212.000392c-11.302417 0-20.466124-9.162684-20.466124-20.466124s9.163707-20.466124 20.466124-20.466124l129.959887 0c9.4093 0 17.605983 6.41613 19.866467 15.549138l123.041314 497.127268L876.966761 683.744549l50.662867-409.391041L385.450281 274.353508c-11.302417 0-20.466124-9.163707-20.466124-20.466124 0-11.30344 9.163707-20.466124 20.466124-20.466124l565.334719 0c5.865591 0 11.449773 2.51631 15.334243 6.912433 3.885494 4.3951 5.696746 10.246365 4.976338 16.066931l-55.728232 450.323289C914.098449 716.977441 905.388067 724.676797 895.056768 724.676797z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-chongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M473.702254 412.498822l-0.304945-0.303922c3.770883-8.076956 4.000104-20.304442-4.799306-29.084409-6.323009-6.341429-13.369495-8.893554-20.701484-8.05649-8.78099 1.00898-17.464767 6.628978-27.674293 16.836457-8.266267 8.266267-15.084557 16.322757-19.274996 22.13309l67.879993 67.879993 15.389502-15.427364-27.047006-27.045983 4.706185-4.684696c6.418176-6.209422 11.732206-6.836709 22.150486-0.112564 10.514471 6.437619 17.751293 10.435677 20.818141 11.234879l15.922644-15.922644c-3.981684-1.333368-15.105023-8.150634-25.007557-13.768585C487.68164 411.585009 480.443795 409.642774 473.702254 412.498822zM452.068538 422.097434l-6.115278 6.133697-18.989493-19.008936c0.914836-1.312902 2.76088-3.770883 6.532787-7.540743 7.256264-7.04751 14.703887-8.15268 21.026896-1.828648C460.563002 405.870868 459.839525 414.326447 452.068538 422.097434z"  ></path>' +
    '' +
    '<path d="M349.103468 464.036615l47.767933 89.821725 16.112979-16.150842-12.761652-22.550599 19.712971-19.693528 22.950711 12.343119 16.741289-16.72287-90.107227-47.462988L349.103468 464.036615zM370.436332 465.979874c5.104251 3.047406 11.42726 6.931876 16.72287 9.788947l18.893302 10.324136-15.199167 15.20019-10.513448-18.685571c-2.856048-5.105275-7.046486-11.333116-10.113335-16.437367L370.436332 465.979874z"  ></path>' +
    '' +
    '<path d="M516.57469 310.240857c-11.636015 1.61887-22.453385 7.750521-35.521005 20.816095-7.846712 7.846712-14.799054 15.809057-19.596314 22.456455l67.556629 67.556629c4.39817-3.353374 10.627035-8.572236 18.702967-16.628726 13.446243-13.464663 21.617343-27.369348 22.854521-40.625256 1.010003-12.244882-3.276626-26.130124-16.437367-39.290865C541.98236 312.391846 529.012977 308.391742 516.57469 310.240857zM538.916535 388.9198c-1.941212 1.942235-4.073782 4.074805-5.713119 5.104251l-45.00603-45.005007c1.010003-1.61887 2.952238-4.170996 6.417153-7.638981 13.370519-13.368472 29.313629-14.208607 43.503816 0.191358C554.53628 358.006743 553.126164 374.939391 538.916535 388.9198z"  ></path>' +
    '' +
    '<path d="M527.451412 47.309492c-247.37097 0-447.888843 200.536292-447.888843 447.908286 0 247.369947 200.51685 447.90624 447.888843 447.90624 247.368924 0 447.925682-200.536292 447.925682-447.90624C975.377094 247.845785 774.822382 47.309492 527.451412 47.309492zM464.027917 821.437561c-13.522991 13.522991-35.4637 13.539364-48.986691 0L182.33628 588.751035c-13.522991-13.522991-13.522991-35.462676 0-48.986691l395.986753-395.968333c13.522991-13.522991 35.44528-13.522991 48.986691 0l232.686527 232.66913c13.522991 13.520945 13.522991 35.461653 0 48.984644L464.027917 821.437561z"  ></path>' +
    '' +
    '<path d="M670.678464 361.684506c-12.417821 12.417821-18.893302 28.568662-19.426445 44.871977-16.303314 0.5137-32.435737 6.989181-44.873 19.426445-25.979698 25.977651-25.979698 68.109214 0 94.106308 25.978674 25.998117 68.108191 25.998117 94.124727 0 12.416797-12.43624 18.893302-28.588105 19.426445-44.873 16.303314-0.533143 32.416294-6.988158 44.873-19.446911 25.977651-25.977651 25.977651-68.107167 0-94.085842C738.806097 335.686389 696.675558 335.686389 670.678464 361.684506z"  ></path>' +
    '' +
    '<path d="M363.502409 563.5337c-13.884218 13.884218-30.720675 13.370519-44.491307-0.417509-15.313777-15.295358-13.180184-32.341592-0.838088-44.683688 5.523807-5.522784 11.122315-8.6848 15.618723-10.513448l-9.181103-15.502066c-4.190439 1.314948-11.941983 5.789866-19.998473 13.866822-20.835538 20.816095-24.493857 50.623981-1.028423 74.088392 19.597337 19.597337 46.661739 22.170952 70.432119-1.638313 8.360412-8.340969 13.255908-16.322757 14.703887-20.609387l-14.514575-9.788947C372.379591 552.621163 368.188128 558.849004 363.502409 563.5337z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-15tian" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M953.229167 311.688835c-23.271006-55.019081-56.582693-104.428398-99.008968-146.854673-42.426275-42.426275-91.835591-75.737962-146.854673-99.008968C650.395 41.72838 589.885881 29.511127 527.520485 29.511127S404.64597 41.72838 347.675444 65.825195c-55.019081 23.271006-104.428398 56.582693-146.854673 99.008968-42.426275 42.426275-75.737962 91.835591-99.008968 146.854673-24.096814 56.970526-36.314067 117.478621-36.314067 179.845041 0 120.279411 45.975101 234.1826 129.456421 320.726675l22.095227-21.313422c-77.932953-80.791048-120.852462-187.124841-120.852462-299.413254 0-58.235332 11.402701-114.719788 33.889855-167.885662 21.723767-51.359738 52.826136-97.489358 92.442412-137.105634 39.617299-39.616276 85.745896-70.718645 137.105634-92.442412 53.165874-22.487154 109.650329-33.889855 167.885662-33.889855 58.235332 0 114.719788 11.402701 167.885662 33.889855 51.358715 21.723767 97.489358 52.826136 137.105634 92.442412 39.616276 39.617299 70.718645 85.745896 92.442412 137.105634 22.487154 53.165874 33.888831 109.650329 33.888831 167.885662 0 58.235332-11.402701 114.719788-33.888831 167.885662-21.723767 51.358715-52.826136 97.489358-92.442412 137.105634-39.617299 39.616276-85.74692 70.718645-137.105634 92.442412-53.165874 22.487154-109.650329 33.888831-167.885662 33.888831-52.937676 0-104.626919-9.473769-153.631006-28.15934l-10.937097 28.684296c52.509934 20.020986 107.878986 30.173207 164.568103 30.173207 62.365396 0 122.874515-12.217253 179.845041-36.314067 55.019081-23.271006 104.428398-56.582693 146.854673-99.008968s75.737962-91.835591 99.008968-146.854673c24.096814-56.970526 36.314067-117.479645 36.314067-179.845041S977.325981 368.659361 953.229167 311.688835z"  ></path>' +
    '' +
    '<path d="M427.845345 696.627974 427.845345 298.393018l-62.579267 0c-26.548656 46.786583-73.957409 84.09121-142.226259 111.884207l0 68.26885c46.756907-15.170514 88.476077-37.274952 125.159558-66.37164l0 284.45354L427.845345 696.627974z"  ></path>' +
    '' +
    '<path d="M655.409201 645.426849c-37.927821 0-61.33595-21.482267-70.164013-64.476477L505.59615 599.913259c18.96391 68.26885 68.892043 102.403275 149.813051 102.403275 94.817506-2.548032 143.470599-47.408753 146.018631-134.641513-3.793396-79.646991-46.164413-121.367185-127.055744-125.159558-30.341029 0-56.891731 8.237615-79.645968 24.65247l9.481955-98.609879 176.360683 0 0-66.372663L535.938202 302.18539l-15.169491 223.769436 66.370617 1.89721c13.896498-17.688871 36.031635-27.171849 66.372663-28.445866 44.237527 1.274016 66.994834 25.927509 68.269873 73.957409C719.233831 617.632829 697.128371 641.633453 655.409201 645.426849z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M302.006823 69.323878c-3.257184-2.758834-7.461949-4.431939-12.06478-4.431939-10.31595 0-18.676361 8.362458-18.676361 18.677385 0 4.656043 1.713015 8.904811 4.533246 12.173251l-0.008186 0.008186 0.106424 0.104377c0.700965 0.800225 428.76632 416.039461 428.76632 416.039461S276.595061 927.515528 275.897166 928.313707l-0.106424 0.105401 0.005117 0.007163c-2.817162 3.270487-4.533246 7.518231-4.533246 12.174274 0 10.313903 8.363482 18.676361 18.676361 18.676361 4.773723 0 9.125845-1.788739 12.428054-4.732791l442.212564-428.66706c0 0 13.047154-14.583137 0-27.631314 0 0-441.918875-428.350858-442.435645-428.79702l-0.134053-0.127913L302.006823 69.323878 302.006823 69.323878z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-libao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M939.456 320l-270.272 0c51.2-36.224 100.032-83.328 105.984-135.232 3.584-25.344-2.368-61.568-45.248-94.208-23.808-18.112-47.616-27.776-71.424-27.776-75.008 0-116.672 89.344-140.48 170.24C490.56 130.432 438.144 0 347.712 0 320.32 0 294.08 10.88 267.904 32.576 217.92 76.096 213.12 121.984 217.92 152.128 228.608 219.776 297.664 277.76 365.568 320L84.544 320C65.472 320 51.2 334.464 51.2 351.424L51.2 640c0 18.112 14.272 32.576 33.344 32.576l32.128 0 0 320C116.672 1009.536 132.16 1024 150.016 1024l723.968 0c17.856 0 33.344-14.464 33.344-31.424l0-320 32.128 0c17.856 0 33.344-14.464 33.344-32.576L972.8 351.424C972.8 334.464 957.312 320 939.456 320zM290.56 140.096C289.344 132.864 286.976 117.12 315.52 91.776c8.32-7.232 20.224-15.68 30.976-15.68 41.664 0 83.328 103.872 107.136 205.312C377.472 241.536 297.664 184.768 290.56 140.096zM472.128 928.576C472.128 945.536 456.64 960 438.784 960L215.488 960c-17.856 0-32.128-14.528-32.128-31.424l0-256C183.36 654.464 197.632 640 215.488 640l223.232 0c17.856 0 33.344 14.464 33.344 32.576L472.064 928.576zM472.128 544.64C472.128 561.536 456.64 576 438.784 576L150.016 576C132.16 576 116.672 561.536 116.672 544.64l0-128C116.672 398.464 132.16 384 150.016 384l288.768 0c17.856 0 33.344 14.464 33.344 32.576L472.128 544.64zM658.432 140.096c7.168 0 16.64 3.648 27.392 12.096 16.64 13.248 16.64 20.544 15.488 24.128-2.368 27.776-57.152 71.232-119.04 107.456C600.128 206.464 629.888 140.096 658.432 140.096zM840.64 928.576c0 16.896-14.272 31.424-32.128 31.424L585.216 960c-17.856 0-33.344-14.528-33.344-31.424l0-256C551.872 654.464 567.36 640 585.216 640l223.232 0c17.856 0 32.128 14.464 32.128 32.576L840.576 928.576zM907.328 544.64c0 16.896-15.488 31.36-33.344 31.36L585.216 576C567.36 576 551.872 561.536 551.872 544.64l0-128C551.872 398.464 567.36 384 585.216 384l288.768 0c17.856 0 33.344 14.464 33.344 32.576L907.328 544.64z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M591.552 1019.072 54.72 512.96 591.488 4.864 624.512 39.744 124.608 512.896 624.448 984.192Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yijiuhuanxin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M440.889136 412.44479l170.666074 0 0 220.443679-170.666074 0 0-220.443679Z"  ></path>' +
    '' +
    '<path d="M440.889136 387.555988 440.889136 391.111531l3.555543 0L611.55521 391.111531l0-3.555543c0-9.799077-7.971528-17.777716-17.777716-17.777716l-135.110642 0C448.860664 369.778272 440.889136 377.756911 440.889136 387.555988z"  ></path>' +
    '' +
    '<path d="M440.889136 654.221728l0 3.555543c0 9.799077 7.971528 17.777716 17.777716 17.777716l135.110642 0c9.806188 0 17.777716-7.978639 17.777716-17.777716L611.55521 654.221728 444.444679 654.221728 440.889136 654.221728z"  ></path>' +
    '' +
    '<path d="M1007.543168 282.397242c-21.944813-126.278673-142.840393-246.420478-268.656845-266.978629-125.816452-20.558151-331.703737-20.558151-457.520189 0C155.542571 35.976764 35.848764 156.118569 15.361724 282.397242c-20.479929 126.278673-20.479929 332.919733 0 459.205517 20.479929 126.278673 140.180847 246.420478 265.997299 266.978629 125.816452 20.558151 331.703737 20.558151 457.520189 0 125.816452-20.558151 246.712032-140.699956 268.656845-266.978629C1029.48087 615.324086 1029.48087 408.675914 1007.543168 282.397242zM222.721004 604.22368c-7.203531-26.204353-11.12885-53.752702-11.12885-82.218381 0-143.131947 97.350773-263.856862 229.296982-299.703848l0-34.026549 95.267225 41.393634L440.889136 271.069281l0-26.631019c-120.035139 35.228322-207.963722 146.28927-207.963722 277.567036 0 24.561692 3.100434 48.405165 8.888858 71.196197L222.721004 604.22368zM593.777494 348.445012c21.567925 0 39.110975 17.54305 39.110975 39.110975L632.888469 391.111531l0 24.177694 0 220.443679L632.888469 654.221728l0 3.555543c0 21.567925-17.54305 39.110975-39.110975 39.110975l-135.110642 0c-21.567925 0-39.110975-17.54305-39.110975-39.110975L419.555877 654.221728l0-18.488825 0-220.443679L419.555877 391.111531l0-3.555543c0-21.567925 17.54305-39.110975 39.110975-39.110975L593.777494 348.445012zM522.225742 832.638887c-88.028139 0-167.56564-36.856761-224.134333-95.900111l-27.363461 15.793723-11.78307-103.203197 83.484155 61.809563-25.272801 14.591949c52.43004 52.785594 124.970233 85.574814 205.06951 85.574814 80.675275 0 153.706133-33.230107 206.228617-86.669921l18.993712 10.965295C690.808268 795.291461 610.815657 832.638887 522.225742 832.638887zM767.344891 687.643835l11.78307-103.203197 22.2577 12.849733c6.499533-24.035472 10.133298-49.230051 10.133298-75.285072 0-133.539092-90.97924-246.185812-214.193034-279.351919l0-22.044368c135.110642 33.678105 235.526293 156.010125 235.526293 301.396287 0 29.966118-4.344874 58.915351-12.30218 86.342811l30.279006 17.47905L767.344891 687.643835z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 97.524c-229.361 0-414.476 186.018-414.476 414.476s186.018 414.476 414.476 414.476 414.476-186.018 414.476-414.476-185.115-414.476-414.476-414.476zM658.286 534.575l-205.883 206.787c-6.321 6.321-14.448 9.030-22.575 9.030s-16.254-2.709-22.575-9.030c-12.642-12.642-12.642-32.508 0-45.15l184.212-184.212-183.309-181.503c-12.642-12.642-12.642-32.508 0-44.246 12.642-12.642 32.508-12.642 44.246 0l205.884 204.078c6.321 6.321 9.030 13.545 9.030 22.575 0 7.224-2.709 15.351-9.030 21.672z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-footer-7" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M496.64 731.52l147.84-332.16L644.48 324.48 401.92 324.48l-0.64 62.72 177.92-1.28-149.76 345.6L496.64 731.52zM882.56 206.72c-28.16 54.4-109.44 206.72-109.44 206.72l145.28-37.76c7.68 31.36 19.2 102.4 19.2 136.32 0 234.88-190.08 424.96-424.96 424.96-234.88 0-424.96-190.08-424.96-424.96 0-234.88 190.08-424.96 424.96-424.96 49.28 0 96.64 8.32 140.16 23.68 0 0 7.68-25.6 16-52.48C619.52 40.96 567.04 32 512 32 247.04 32 32 247.04 32 512c0 264.96 215.04 480 480 480 264.96 0 480-215.04 480-480C992 396.16 951.04 289.92 882.56 206.72z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shoujiqia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M259.721253 704.158485l251.345492 0c35.647895 0 64.649416-29.001521 64.649416-64.649416L575.71616 388.163577c0-35.647895-29.001521-64.649416-64.649416-64.649416L259.721253 323.514161c-35.647895 0-64.649416 29.001521-64.649416 64.649416l0 251.345492C195.071837 675.156964 224.073358 704.158485 259.721253 704.158485zM240.09731 388.163577c0-10.82044 8.803503-19.623943 19.623943-19.623943l251.345492 0c10.82044 0 19.623943 8.803503 19.623943 19.623943l0 251.345492c0 10.82044-8.803503 19.623943-19.623943 19.623943L259.721253 659.133012c-10.82044 0-19.623943-8.803503-19.623943-19.623943L240.09731 388.163577z"  ></path>' +
    '' +
    '<path d="M427.161776 635.496685c12.43317 0 22.512736-10.079566 22.512736-22.512736l0-16.981766 25.069979 0c12.43317 0 22.512736-10.079566 22.512736-22.512736s-10.079566-22.512736-22.512736-22.512736l-25.069979 0L449.674513 414.68972c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 198.293205C404.64904 625.417119 414.728606 635.496685 427.161776 635.496685z"  ></path>' +
    '' +
    '<path d="M294.547433 491.847008l25.069979 0 0 121.135918c0 12.43317 10.079566 22.512736 22.512736 22.512736s22.512736-10.079566 22.512736-22.512736L364.642884 414.68972c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 32.131815-25.069979 0c-12.43317 0-22.512736 10.079566-22.512736 22.512736S282.114263 491.847008 294.547433 491.847008z"  ></path>' +
    '' +
    '<path d="M944.064436 377.788276l-179.078585-168.845523c-4.177136-3.938706-9.700943-6.132674-15.443737-6.132674L200.282512 202.810079c-28.843932 0-56.164161 9.255805-79.007425 26.76662-22.097274 16.939811-38.438451 40.950667-46.01501 67.609841-3.3984 11.960403 3.541663 24.409946 15.501042 27.809369 11.960403 3.399423 24.409946-3.540639 27.809369-15.501042 10.316973-36.303834 43.917232-61.658292 81.712023-61.658292l540.319999 0L906.107963 403.883607l0 291.022143c0 46.833655-38.10076 84.934414-84.934414 84.934414L200.282512 779.840164c-46.833655 0-84.934414-38.10076-84.934414-84.934414L115.348098 376.213407c0-12.43317-10.079566-22.512736-22.512736-22.512736s-22.512736 10.079566-22.512736 22.512736l0 318.691319c0 71.660086 58.299801 129.959887 129.959887 129.959887l620.891036 0c71.660086 0 129.959887-58.299801 129.959887-129.959887L951.133436 394.168338C951.133436 387.967102 948.576193 382.041136 944.064436 377.788276z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M632 477.952h-376.256v68.096h376.256l-142.272 136.32h100.609l177.92-170.368-177.92-170.368h-100.609z"  ></path>' +
    '' +
    '<path d="M8.64 512c0 277.952 225.408 503.36 503.36 503.36s503.36-225.408 503.36-503.36-225.408-503.36-503.36-503.36-503.36 225.408-503.36 503.36zM983.999 512c0 260.672-211.328 472-472 472s-472-211.328-472-472 211.328-472 472-472c260.672 0 472 211.328 472 472z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xuangoushouji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M392.533333 661.333333 320 661.333333 320 256l264.533333 0c0 0 0 8.533333 0 8.533333l21.333333 0L605.866667 196.266667c0-12.8-4.266667-21.333333-17.066667-21.333333L315.733333 174.933333C302.933333 174.933333 298.666667 183.466667 298.666667 196.266667l0 537.6c0 12.8 4.266667 21.333333 17.066667 21.333333l76.8 0L392.533333 661.333333z"  ></path>' +
    '' +
    '<path d="M725.333333 302.933333l-273.066667 0c-12.8 0-17.066667 12.8-17.066667 21.333333l0 537.6c0 12.8 4.266667 21.333333 17.066667 21.333333L725.333333 883.2c12.8 0 17.066667-12.8 17.066667-21.333333L742.4 324.266667C742.4 315.733333 733.866667 302.933333 725.333333 302.933333zM618.666667 857.6 554.666667 857.6c-12.8 0-21.333333-8.533333-21.333333-21.333333s8.533333-21.333333 21.333333-21.333333l64 0c12.8 0 21.333333 8.533333 21.333333 21.333333S631.466667 857.6 618.666667 857.6zM721.066667 793.6l-264.533333 0L456.533333 384l264.533333 0L721.066667 793.6z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-520jiashouhouwangdian24px" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 938.666667c-4.266667 0-298.666667-277.333333-298.666667-512s132.266667-341.333333 298.666667-341.333333 298.666667 106.666667 298.666667 341.333333S516.266667 938.666667 512 938.666667zM512 128c-140.8 0-256 98.133333-256 320 0 200.533333 251.733333 426.666667 256 426.666667 4.266667 0 256-226.133333 256-426.666667C768 221.866667 652.8 128 512 128zM512 512c-72.533333 0-128-55.466667-128-128s55.466667-128 128-128 128 55.466667 128 128S584.533333 512 512 512zM512 298.666667c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333S558.933333 298.666667 512 298.666667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-man150yuanbaoyou24px" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896 490.666667l0 426.666667 0 42.666667L128 960l0-42.666667 0-426.666667L85.333333 490.666667l0-42.666667 0-128 0-42.666667 162.133333 0C192 230.4 174.933333 162.133333 196.266667 119.466667c29.866667-51.2 119.466667-55.466667 200.533333-8.533333 72.533333 42.666667 106.666667 115.2 98.133333 166.4l34.133333 0c-8.533333-51.2 29.866667-119.466667 98.133333-166.4 76.8-46.933333 166.4-46.933333 192 8.533333 25.6 42.666667 0 106.666667-55.466667 157.866667l170.666667 0 0 42.666667 0 128 0 42.666667L896 490.666667zM379.733333 149.333333C315.733333 115.2 251.733333 110.933333 234.666667 140.8s12.8 93.866667 72.533333 128c4.266667 4.266667 12.8 4.266667 17.066667 8.533333l128 0C469.333333 247.466667 439.466667 183.466667 379.733333 149.333333zM469.333333 320 469.333333 320 315.733333 320 128 320l0 128 341.333333 0L469.333333 320zM469.333333 490.666667 170.666667 490.666667l0 426.666667 298.666667 0L469.333333 490.666667zM554.666667 917.333333l298.666667 0 0-426.666667-298.666667 0L554.666667 917.333333zM789.333333 140.8c-17.066667-29.866667-76.8-29.866667-136.533333 8.533333-59.733333 38.4-93.866667 93.866667-76.8 123.733333 0 0 0 0 0 0l115.2 0c8.533333-4.266667 12.8-8.533333 21.333333-8.533333C772.266667 230.4 806.4 174.933333 789.333333 140.8zM896 320l-187.733333 0-145.066667 0L554.666667 320l0 128 341.333333 0L896 320z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-buoumaotubiao46" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M279.760756 461.986909c-17.873455 0-35.746909-6.795636-49.361455-20.386909l-194.513455-194.513455c-9.099636-9.099636-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0l194.513455 194.513455c9.146182 9.099636 23.877818 9.076364 32.930909 0l109.405091-109.428364c4.375273-4.375273 6.772364-10.193455 6.772364-16.453818s-2.420364-12.101818-6.772364-16.477091L211.408756 72.098909c-9.099636-9.099636-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0l194.234182 194.234182c13.149091 13.149091 20.410182 30.696727 20.410182 49.384727s-7.261091 36.212364-20.410182 49.384727l-109.405091 109.428364C315.530938 455.191273 297.657484 461.986909 279.760756 461.986909z"  ></path>' +
    '' +
    '<path d="M891.228393 1015.552c-34.373818 0-68.701091-13.079273-94.859636-39.237818L512.83712 692.782545c-9.099636-9.099636-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0l283.554909 283.554909c34.187636 34.164364 89.716364 34.164364 123.904 0 34.117818-34.141091 34.117818-89.716364 0-123.904L669.625484 535.994182c-9.099636-9.076364-9.099636-23.808 0-32.907636s23.808-9.099636 32.907636 0L986.111302 786.618182c52.270545 52.317091 52.270545 137.425455 0 189.696C959.952756 1002.472727 925.602211 1015.552 891.228393 1015.552z"  ></path>' +
    '' +
    '<path d="M366.91712 738.816c-94.976 0-188.485818-37.12-259.630545-108.288C0.488029 523.752727-30.13888 359.237818 31.04512 221.184 36.234938 209.454545 49.919302 204.078545 61.76512 209.338182 73.517847 214.551273 78.800756 228.305455 73.610938 240.034909c-53.457455 120.599273-26.693818 264.285091 66.583273 357.562182 100.677818 100.654545 252.602182 123.438545 378.158545 56.552727 11.310545-6.050909 25.460364-1.722182 31.488 9.611636 6.050909 11.357091 1.745455 25.437091-9.611636 31.488C485.235665 724.526545 425.773847 738.816 366.91712 738.816z"  ></path>' +
    '' +
    '<path d="M705.418938 460.893091c-1.489455 0-3.025455-0.139636-4.538182-0.442182-12.613818-2.490182-20.805818-14.731636-18.315636-27.345455 20.875636-105.541818-11.985455-213.922909-87.947636-289.908364-93.323636-93.300364-237.056-120.017455-357.608727-66.56C225.139665 81.850182 211.455302 76.520727 206.288756 64.791273 201.075665 53.038545 206.381847 39.284364 218.134575 34.094545c137.960727-61.207273 302.568727-30.626909 409.390545 76.194909 86.970182 86.970182 124.602182 211.037091 100.724364 331.869091C726.038575 453.236364 716.310575 460.893091 705.418938 460.893091z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sousuo-sousuo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M716.6003 213.800623c-138.851102-138.915088-364.020238-138.915088-502.935326 0s-138.915088 364.084225 0 502.935326a355.573996 355.573996 0 0 0 502.935326 0 355.573996 355.573996 0 0 0 0-502.935326z m-580.359212 580.359212a465.183184 465.183184 0 1 1 657.783099 0 465.183184 465.183184 0 0 1-657.783099 0z m868.939152 211.156054a63.474789 63.474789 0 0 1-89.837303 0l-89.773316-89.837303a63.410803 63.410803 0 1 1 89.773316-89.773316l89.837303 89.773316a63.346816 63.346816 0 0 1 0 89.837303z" fill="#666666" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yiyuan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M522.51648 37.55008c-232.34048 0-421.38112 189.03552-421.38112 421.38112s189.04064 421.376 421.38112 421.376c232.3456 0 421.38112-189.03552 421.38112-421.376S754.86208 37.55008 522.51648 37.55008z m0 796.8512a19.75296 19.75296 0 0 1-19.2768-15.5136 356.74624 356.74624 0 0 1-102.93248-20.81792 19.77856 19.77856 0 0 1-16.11776 8.42752c-2.56 0-5.1712-0.50688-7.69536-1.57184a374.88128 374.88128 0 0 1-229.46304-346.0096c0-146.27328 85.90336-280.27904 218.86976-341.36064a19.74272 19.74272 0 0 1 26.1376 9.61024 356.51584 356.51584 0 0 1 110.73024-23.97696 19.7632 19.7632 0 0 1 19.74784-19.72224c98.4576 0 191.51872 37.84192 262.05184 106.53696a19.7376 19.7376 0 0 1 0.6656 27.58656 358.87616 358.87616 0 0 1 49.22368 67.43552 19.71712 19.71712 0 0 1 25.69216 9.38496c25.1136 51.4816 37.8624 106.82368 37.8624 164.50048-0.00512 207.03744-168.45824 375.49056-375.49568 375.49056z" fill="#FFBC68" ></path>' +
    '' +
    '<path d="M522.51648 122.97728c88.09472 0 171.3664 33.85344 234.47552 95.3088a19.75296 19.75296 0 0 0 27.95008-0.3328c0.10752-0.11264 0.18432-0.25088 0.29184-0.37376a19.7376 19.7376 0 0 0-0.6656-27.58656C714.04032 121.30304 620.9792 83.456 522.51648 83.456a19.74784 19.74784 0 0 0-19.74784 19.72224v0.03072a19.74784 19.74784 0 0 0 19.74784 19.76832zM376.48896 804.92032a19.74784 19.74784 0 0 0 7.69536 1.57184 19.7632 19.7632 0 0 0 16.11776-8.42752c0.80384-1.13664 1.53088-2.32448 2.09408-3.65568a19.72224 19.72224 0 0 0-10.53184-25.84576 335.50848 335.50848 0 0 1-205.32736-309.632c0-130.88256 76.89216-250.78272 195.86048-305.43872a19.77344 19.77344 0 0 0 9.7024-26.21952c-0.01536-0.04096-0.04608-0.06656-0.06656-0.10752a19.7376 19.7376 0 0 0-26.1376-9.61024c-132.9664 61.07648-218.86976 195.07712-218.86976 341.35552a374.8864 374.8864 0 0 0 229.46304 346.0096z m113.792-130.12992h56.03328a16.15872 16.15872 0 0 0 16.16384-16.16384V264.81664a16.1536 16.1536 0 0 0-16.16384-16.15872H490.28096a16.16384 16.16384 0 0 0-16.16384 16.15872v393.80992a16.15872 16.15872 0 0 0 16.16384 16.16384z m32.23552 120.09984a19.75808 19.75808 0 0 0-19.75296 19.75296c0 1.4592 0.18432 2.87744 0.48128 4.2496a19.74272 19.74272 0 0 0 19.2768 15.50848c207.04256 0 375.49056-168.44288 375.49056-375.48544 0-57.68192-12.74368-113.024-37.8624-164.50048a19.712 19.712 0 0 0-25.69216-9.38496c-0.25088 0.10752-0.50688 0.1536-0.74752 0.27136a19.7632 19.7632 0 0 0-9.10848 26.43456c22.48704 46.05952 33.8688 95.58016 33.8688 147.21024 0 185.24672-150.71744 335.94368-335.95392 335.94368z m0 122.97216c253.45536 0 458.9312-205.47072 458.9312-458.92608C981.44256 205.47584 775.97184 0 522.51648 0S63.58016 205.47584 63.58016 458.9312c0 253.46048 205.48096 458.9312 458.93632 458.9312z m0-880.31232c232.3456 0 421.38112 189.03552 421.38112 421.38112s-189.03552 421.376-421.38112 421.376c-232.34048 0-421.38112-189.03552-421.38112-421.376S290.17088 37.55008 522.51648 37.55008zM350.62784 974.60736V1024h635.8272v-49.39264H350.62784zM49.39776 1024h276.19328v-49.39264H49.39776V1024z" fill="#3C3C3C" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)