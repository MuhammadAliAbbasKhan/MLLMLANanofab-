import logging
from django.conf import settings

logger = logging.getLogger(__name__)

def get_mongo_db():
    """
    Establishes connection to MongoDB Atlas Cloud.
    Falls back gracefully if network or connection string is not available.
    """
    try:
        from pymongo import MongoClient
        uri = getattr(settings, 'MONGODB_URI', None)
        if not uri:
            return None
        client = MongoClient(uri, serverSelectionTimeoutMS=2000)
        db = client.get_database('mllmlananofab_db')
        return db
    except Exception as e:
        logger.warning(f"MongoDB Atlas connection skipped or offline: {e}")
        return None

def sync_user_to_mongodb(user_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        users_col = db['mllmlananofab_users']
        data = {
            'username': user_obj.username,
            'email': user_obj.email,
            'full_name': user_obj.full_name,
            'company': user_obj.company,
            'plan_tier': user_obj.plan_tier,
            'is_active': user_obj.is_active,
            'payment_reference': user_obj.payment_reference,
            'updated_at': str(user_obj.created_at)
        }
        users_col.update_one({'email': user_obj.email}, {'$set': data}, upsert=True)
        return True
    except Exception as e:
        logger.error(f"Error syncing user to MongoDB Atlas: {e}")
        return False

def sync_trial_request_to_mongodb(trial_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        trials_col = db['mllmlananofab_trials']
        data = {
            'trial_id': trial_obj.id,
            'full_name': trial_obj.full_name,
            'email': trial_obj.email,
            'company': trial_obj.company,
            'software_choice': trial_obj.software_choice,
            'comments': trial_obj.comments,
            'status': trial_obj.status,
            'created_at': str(trial_obj.created_at)
        }
        trials_col.update_one({'trial_id': trial_obj.id}, {'$set': data}, upsert=True)
        return True
    except Exception as e:
        logger.error(f"Error syncing trial request to MongoDB Atlas: {e}")
        return False

def sync_contact_inquiry_to_mongodb(inquiry_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        inq_col = db['mllmlananofab_inquiries']
        data = {
            'inquiry_id': inquiry_obj.id,
            'name': inquiry_obj.name,
            'email': inquiry_obj.email,
            'subject': inquiry_obj.subject,
            'message': inquiry_obj.message,
            'created_at': str(inquiry_obj.created_at)
        }
        inq_col.update_one({'inquiry_id': inquiry_obj.id}, {'$set': data}, upsert=True)
        return True
    except Exception as e:
        logger.error(f"Error syncing inquiry to MongoDB Atlas: {e}")
        return False

def sync_service_request_to_mongodb(service_obj):
    db = get_mongo_db()
    if db is None:
        return False
    try:
        service_col = db['mllmlananofab_service_requests']
        data = {
            'service_id': service_obj.id,
            'user_name': service_obj.user_name,
            'user_email': service_obj.user_email,
            'company_name': service_obj.company_name,
            'project_title': service_obj.project_title,
            'service_type': service_obj.service_type,
            'system_specifications': service_obj.system_specifications,
            'status': service_obj.status,
            'created_at': str(service_obj.created_at)
        }
        service_col.update_one({'service_id': service_obj.id}, {'$set': data}, upsert=True)
        return True
    except Exception as e:
        logger.error(f"Error syncing service request to MongoDB Atlas: {e}")
        return False
