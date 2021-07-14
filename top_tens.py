from bs4 import BeautifulSoup
import requests
from flask import jsonify
import pymongo

def scrape():
    conn = 'mongodb://localhost:27017'
    client = pymongo.MongoClient(conn)
    db = client.project_2
    url = 'https://www.boxofficemojo.com/year/2021/?grossesOption=calendarGrosses'
    top_tens = []

    # Retrieve page with the requests module
    response = requests.get(url)

    # Create BeautifulSoup object; parse with 'html.parser'
    soup = BeautifulSoup(response.text, 'html.parser')

    # results are returned as an iterable list
    results = soup.find_all('tr')


    #loop to scrape and store results
    for result in results:
   
        try:
            
            title = result.find('a', class_='a-link-normal').text
            total_gross = result.find_all('td', class_='a-text-right mojo-field-type-money mojo-estimatable')
            
            if (title and total_gross):    
                
                total_gross2 = (total_gross[1].text)           
                post = {
                    'title': title,
                    'totalGross': total_gross2,
                    
                    }
                
                top_tens.append(post)
        except AttributeError as e:
            pass  

            return (top_tens)
    
    db.top_ten.remove()
    db.top_ten.insert(top_tens[0:10])


scrape()