import React from "react";
import "./portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Desing</li>
        <li>Branding</li>
      </ul>
      <div className="container">
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAAC+CAMAAAD6ObEsAAAA7VBMVEX////09PQAAAAWFhb8/PzS0tLPz8/V2+fT09P4+PjS2OTc4OvQ1uLX3en5+fvl6fLb29vg4ODf39/n5+d5eXlMTEyLi4utra2/v7/s7OygoKBxcXHGxsa1tbULCwvg5O+SkpKjo6ODg4Ps7vVfX1+Hh4eZmZlAQEBsbGxYVlcVFxY1NjUhHh9JSU4pKSlRUVHqf4MfHR6+xs87Ozv0zMz24OHum57ywcPph4nkQ0jwq67skpXmWl/xubviMTj67OzocXPmZmnodHfjKTD21daXmqS2usRSUVmFh5Cgpq9qbnV5eoOwtL8sLTKJjZbp9EhwAAANdElEQVR4nO2dCWPaNhvHZSEbhDkM5rDBnCEcSSCD9Ni6o+3elfRav//HeZ9HssEQE1ICC1j8u8Yy2Mz+8VySFZWQs84666yzzjrrrLPOOuuss846ThmGwWXDMzTY2DohlvWy1/QcuYSx3c5ktFemeK7bq1MPt7TIROP0pDue4TS8Rq1Ws/SfP51RQmgRW9y5EQQue/3yfi/xv1KlPOwPSrfDu36p5/z86Yy2aU+0jHZCoNAoPVH/cNC6JYPGDqczal8KI7DbNd8v2iPxuZX9XN/piHUY72Dc1DvVqi1e0sTG2gXsWS8rZhC3hlvpHEVGLLegvfBFvYzYsNdt1w1rRMqNerc3rJZKo7aaNs2qhmH3baIRx6t5RsrpOA1rhwxy1llnnXXWWWcdjzjK/gm5L33FhxLTULahowz8s0XeiXaAt0ui0Cw9ldIDPc4itiiIRKHpYamJwrcKzZUuoqe2sog9Cq0oKaS2GkZsUQQOomkpPYxiMwsFUICLpPSwjOh0ogAKzYYsgtpiFyqgyFn6CooNLFRAgeEiAJFS0ipyuYVZuCtmoRwKngMJHvCzoEsSKSVRaDkBw5clWTxWaMUXRRgEz2nCRYKQoRoKzhcgoOUa29JpfFHkAgfhslHQVxLqQxxxRhEYBZdAtlUX8UUROAgXVoHtVCoVnVP1mKPIPZBfXWyqLxRCwXOPd0bii4KvYpDVxWNmEV8ULAiYSxScr1rFagSNL4qHsQILcX0zDMVQMFFpPcSBSUQxFDlW0KNQxNsqmJQEIFsMggcLKq0HMIovfcUHUxhFzkfBwpWWUihyLOCBzYCJpkeziDUKwWLJQ6BYDZ1hGvFGwViIxTJq2HoUi9ijyC2sIqRiyEcWNGKPYqmQpwRpZMUwFEPh+p7C9RUWgodSKFzN5q7ojjDNWIehEgpm84Lrcn8Hn6SqikJz3YKmsQULe52FKii4nSvkOMsBDe7KCFowVmEogoLY3AaTgEgBPhIkE2uVReGlr/hgCvuG7bo2Bx428OAijYhyA1noKqHQbI0VcAsb+KtxAOPXGLqHM7XUQYHeASCYaxe0HICwNZe8ei0LDMNbGoYKKDBqMiBgMwKO4sLmlzdvSQ5eZBxZ+DAUQeEWXBE1UeTV219/e/c7QUDM8jzxUEgdFARMAUtNV+Pkjz//ev/hHQEOxHUcx/OkYahTYmlQdduuRl5/fPfXm18YwaELr9pYsDCUQQH1BIdw+c8H8ubdG41AZUFSnU612ljCUAIFF9ESgsRfr959/PCKMKwxau1+LYAhWMR+xFvIhj+M/Pr27Ufy/j34BtGqpctKG2EsDUMNFNwmr9/88/4P8ud7se+U6qVStxuGoQgKQvgvv7/67fe/iQgSercOKiEMMI1+wEIFFOTNn+Tjh/fsNb5GipV6IKRxKQwDfST10ld8MIWt4uMb8ivBDikptAFAPaRS6RINo6EICsb+915YhN1HS6ivqtStCBZHh4JxztG5C3LhIFY0LLkkEpdvrDUf+aCwWfyDAaPQL0WoW5FWcXyxokKbdOgOKcUugVtqUtAQf++xDW+IxZGIRZvN7asirZZYcFYfwqSUIIAIMErIsmJRV2h7EN8XikTzmtIEojBgi6LUwGWhoCGWxCjhIVs/aAUE99qQLS67l6CKbwaCgLecpSerTX5UKOTtF+Dmmwm0iibsgV3UgcCA4JpIVwlafToKQuxGBQBUAgbL+w8w6Mue6bGhQAC2uPeJxQqDZoKW0C8SV7gwVAeOaG5fgizgoBl9MAiMjI63DmA5nGdZ1lGioJOGBheFLVz+CF3jCraIpE7IBDZPWBrK51CD/FBteEboV29XhvythY4RhXADQopoH9cTUEJ6iINsuEHl3nYWttfpVx0j9UBWpOxjRCHXS9MDV4GE0RQJ5QbsoTqEkDp8AgjPcXRxi1sInAKKAsaEsq87tIMavCJM5Amr87EtN35SKAhmDrmOHlyf2Mrs4jvQ44tPMqsYocJDLd47ZhRdjAq1olEGH5mKV0qChawuSI/6Kw/uVTuh4HgW40Fr/yj4FdqFrCtkcVmAkgJ2RFsE0f0vvbULCl4tMOb2q4zZnQbz+wRFjG5WxxA77V0uBQvv4Mu2p4gBcdT8V26x5pafe0QoWL/cuYO6vt5ud0uVXuW20u+X66VKpz+sVHt9ctut73Ip7enkZpkg+teYQXqLoOAlILX6mXRA6QEWJd3JKmqN7l3tsjKstLvDvlO5tQfWxCldlgWKdqPc7e7j0jTb3lRZeodYqHbHWCHHDZldc9iDTjPvHOA6/wPtiMIXCwYZ4qCdYkU7aiAkrPopPoXcySpWx0ZiYhTHVGK9tE4dRWGHJcM36IhRNEDbYk6J0sm+FgI+YhRYYm0ZvUth3bmXIoYcNQrodESi8Aa3t36x6SGKnUrbCJ0gCgd7I357Apazrwc6J4kicRWg4J323uaJnDiKferIUHiVeqnv90Z9FA4kEvHNY8OCvCJGxnHHlllGjkERB06t+RlHHOpWRqOScaIovCkVGmkhFBgORAcPuua0j3lFDmRQHNTBjRi5aCTkqT0eHHqHg8T0J4LqMaGo0mbiCkXFEL+P4rrp+0kZGjV8FXUlx7ea/iBO33+ylqAJTR6aaPovPPnf1DgiFDjOLb5b+DnYiGLVKnwU+LSg6Z868lH4H5WgTy3BjghFD+/HY5qIBd4mFIaOFkAtw8B/fMlHcdtMNKcec3EwGJMroqAV2x4uHjyfFApGgzHdOhUlZDSK1QwiUWg+AcAJx7TloaIIxc/onxwKG61ZtAyaaI5+BoUFp96I/YZ8gFaWRAgZPe0p6xGiuFmguF1B0dmKojkR+84ait6BUCxXvT0ECvH4XJQUl1RMJfBR+BMLZANReNEOIsoLCBZ46wdFwS3oDre1yMP3FDbBmJvXtjByEQt9FEO5K0MiokB3oJeum3IXYRNuvTlwMR3DvnFoFEWoWOikEHX8nlDIjHh9gxs0dx8FkrkKEqN4QBQkXWeBwpGnTnFzR/aPgoX9gTQMp0sTkwOi8KfdQPXUFI4S9EEmcL9YeC1Q+PUU7gQlVkmeikDs/aPg/ba9xNIZEI6TxToR8WJvhXdNTqigVyJkBEM3dtN/lQaPDYfyuFKo8K74p05ELwQLb0HgNmg8D0WTOlw+HtZ4A4o4AFIddQ+Jgrj927vB0K+JOrVOTRQLrHZ7PahoDdj3RzKd3vX1bReCQq3Tqcleut2Gg4JTq3CoKFEaQeN5KG4ARdGGA4o2qwgUcNNRSSTWI94MbhlR2JRaLEVvSBtRbDo6zihYZwp+KFBMbzSLTgQKMph6h0ymL61oFF16PRxOEcUNHRUQRXNSH97QqnooLiEHUYFi0qO9BKKY4gsN9VB06d1lV6CYapPmFB3kugsvqGcVvDq49GNFQivQqR8remVDORQiaWIGcSnVmEOpshmEycl3gEJUERxnVMi6IlrxRcFvBw1gwKe0GLwLJVZZRRQQNGmRcEatxZvc6kQnj5ij0DQcLGk0rNB7sjOiHgpuJfC3tTbfuzooIFD2y5PEGYUQJJGnj3rGG8VP6Yzi4Cgu8lFqtVryp5DZMkN61pUcNYqsaWbNLEj88JWUSgfKhPSsGWpHjSL8hZthHhLGQxyKoDDXUSxNQzWriIKxbhbqoMguvGQtYChoFWZ2YRmRLFRCsfSRSLtQCMXSQ6JzqkIo1txDJatobWQR7SG55/zvTh1FesVD4oyi9YDGowV4rFFgj2s9cm5GEedYEcFiNZ0uOiKZtAJWscZiYx811iharQgWj/XJFEKRPVuFzyKfTK+wkDQURJG/aOU/tcJxM6ukVfjjmZ/mrYeDe0sW8Udhti5wyDebyc7uo0b2FlYR37rCB5EXIMy0mczMxp9bj9TeMUfhg0hm4Wufzb6O560NDhL3WJEXD0PAKQSITPLL3Si52UFijEJaBGSNpAQBdzsefF4zi2XtHWMUPoiWAJFMZ5J5czYaj7+3Iq0CWMQWhSYSqLSIZDKTzSfnX2ZfR+P79IbeaXxRXGAlkc0kZxnAYeYzs/lsNvs2Hg2+tVasYokizhkEbjaTaZnpVj4zBxCebs3v7kMuspZC4osCSutMBmJm/gJcBGToqdmXAZjFfSYaxfMc5PnSDrUE0kUyk4aCKgCRSqWc6mx+Nx7fL1xkn1ZxzMoDCDOfFyAMywIQmXwr/wNYjMdfTKVQXEDfA0FkZinLMuaNtJxn0huAWdxnzH1Xm8esCwQBN6gXLK86NzGh4H8ZdJHxV3PdKp7bHTtmXaRnOHhr5o3qLJh9hCy+/Ivh4rv50Cpii6KVSSatYsGY64uJWCaO/Oa/3YFZfDPXBr3jjOIimSwUjXlGUrhof5l/+vEZ+2gmxM37u9latRlrFGZxNjMX8/S+XHz6/uOrcJEZuMj4h7lOIr4o7DAIUPrTrDXLiCzyA1msWMXzn6Qfs+zWyszN9PyHGczYzI8G48F8PYHEF8XaFNbv7bmfQ0CZf8d338wQinhbxfps3lZ+iQIz6iCdVRXFYmazCBdfB5BDFEfhz+82B4PvWUVjxRqK/Hwq02laYasIWHweh1CoaRWLX4G4T2bPsUKaxWx2yij+DyNPzlniM20rAAAAAElFTkSuQmCC"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="data:image/png;base64,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"
            alt="revolution"
          ></img>
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;