
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { Link } from 'react-router-dom';
import { listActivities } from '../actions/activityActions';
import Activity from '../components/Activity'; 

function ActivitiesScreen() {
  const dispatch = useDispatch();
  const activityList = useSelector((state) => state.activityList);
  const { loading, error, activities } = activityList;

  useEffect(() => {
    dispatch(listActivities());
  }, [dispatch]);

  return (
    <div>
    <h1>Activities</h1>
    {loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
      <>
        <Row>
          {activities.map((activity) => (
            <Col sm={12} md={6} lg={4} xl={3} key={activity.id}>
              <Link to={`/activity/${activity.id}`} className="text-decoration-none">
                <Activity activity={activity} />
              </Link>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center mt-4">
          <Link to="/Cart">
            <Button variant="primary">Go to Cart</Button>
          </Link>
        </div>
      </>
    )}
  </div>
);
}
export default ActivitiesScreen;
