#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub lateRide {
    my ($n) = @_;

    my $minutes = int($n / 60);
    my $seconds = $n - (int($n / 60) * 60);

    return int($minutes / 10) + ($minutes % 10) + int($seconds / 10) + ($seconds % 10);
}
